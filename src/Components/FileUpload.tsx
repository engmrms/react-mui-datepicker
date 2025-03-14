import { CheckCircle, Info } from 'google-material-icons/filled'
import { Close, UploadFile } from 'google-material-icons/outlined'

import { cn } from '../Lib'
import ActionLoader from './ActionLoader'
import { Button } from './ui/button'

import { useCallback, useReducer, useRef, useState } from 'react'
import { strings } from '../Locales'
import ShouldRender from './ShouldRender'

type AcceptedFormatsType = Record<string, string[]>

const DefaultAcceptedFormats: AcceptedFormatsType = {
    'image/png': ['.png'],
    'image/jpeg': ['.jpg', '.jpeg'],
    'application/pdf': ['.pdf'],
}

type FileInfo = {
    id: string
    file: File
    progress: number
    status: 'uploading' | 'success' | 'error'
    error?: string
}

type Action =
    | { type: 'ADD_FILES'; payload: FileInfo[] }
    | { type: 'UPDATE_PROGRESS'; payload: { id: string; progress: number } }
    | { type: 'UPDATE_STATUS'; payload: { id: string; status: FileInfo['status']; error?: string } }
    | { type: 'REMOVE_FILE'; payload: string }

function fileInfoReducer(state: FileInfo[], action: Action): FileInfo[] {
    switch (action.type) {
        case 'ADD_FILES':
            return [...state, ...action.payload]
        case 'UPDATE_PROGRESS':
            return state.map(file =>
                file.id === action.payload.id
                    ? {
                          ...file,
                          progress: action.payload.progress,
                          status: action.payload.progress >= 100 ? 'success' : 'uploading',
                      }
                    : file,
            )
        case 'UPDATE_STATUS':
            return state.map(file => (file.id === action.payload.id ? { ...file, status: action.payload.status, error: action.payload.error } : file))
        case 'REMOVE_FILE':
            return state.filter(file => file.id !== action.payload)
        default:
            return state
    }
}

function useFileUpload() {
    const [files, dispatch] = useReducer(fileInfoReducer, [])

    const addFiles = useCallback((newFiles: FileInfo[]) => {
        dispatch({ type: 'ADD_FILES', payload: newFiles })
    }, [])

    const updateProgress = useCallback((id: string, progress: number) => {
        dispatch({ type: 'UPDATE_PROGRESS', payload: { id, progress } })
    }, [])

    const updateStatus = useCallback((id: string, status: FileInfo['status'], error?: string) => {
        dispatch({ type: 'UPDATE_STATUS', payload: { id, status, error } })
    }, [])

    const removeFile = useCallback((id: string) => {
        dispatch({ type: 'REMOVE_FILE', payload: id })
    }, [])

    return {
        files,
        addFiles,
        updateProgress,
        updateStatus,
        removeFile,
    }
}

interface FileItemProps {
    file: FileInfo
    onRemove: (id: string) => void
}

function FileItem({ file, onRemove }: FileItemProps) {
    return (
        <li
            className={cn('flex flex-col rounded border border-border-neutral-primary bg-background-neutral-100', {
                'border-border-error': file.status === 'error',
            })}>
            <div className="flex items-center justify-between p-space-02">
                <div className="flex gap-space-02">
                    {file.status === 'uploading' && <ActionLoader />}
                    {file.status === 'success' && <CheckCircle className="text-icon-success" />}
                    {file.status === 'error' && <Info className="text-icon-error" />}
                    <span className="truncate text-body-01 font-medium text-text-default">{file.file.name}</span>
                </div>
                <Button
                    variant={'text'}
                    size={'icon-xs'}
                    rounded={'default'}
                    colors={'neutral'}
                    onClick={() => onRemove(file.id)}
                    aria-label={`remove file ${file.file.name}`}
                    className="mix-blend-multiply">
                    <Close />
                </Button>
            </div>
            {file.status === 'error' && (
                <div className="border-t border-border-primary p-space-02">
                    <span className="text-caption-01 text-text-error">{file.error}</span>
                </div>
            )}
        </li>
    )
}

interface FileListProps {
    files: FileInfo[]
    onRemove: (id: string) => void
}

function FileList({ files, onRemove }: FileListProps) {
    return (
        <ul className="space-y-space-01">
            {files.map(file => (
                <FileItem key={file.id} file={file} onRemove={onRemove} />
            ))}
        </ul>
    )
}

interface DragAndDropAreaProps {
    isDragging: boolean
    disabled?: boolean
    acceptedExtensions: string[]
    onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void
    onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void
    onDragOver: (e: React.DragEvent<HTMLDivElement>) => void
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void
    onSelectFiles: () => void
}

function DragAndDropArea({
    isDragging,
    disabled,
    acceptedExtensions,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onSelectFiles,
}: DragAndDropAreaProps) {
    return (
        <div
            role="button"
            className={cn(
                `group rounded border border-dashed bg-background-neutral-100 p-space-05 text-center hover:border-border-success hover:bg-background-success-25`,
                {
                    'border-border-success bg-background-success-25': isDragging,
                    'pointer-events-none cursor-not-allowed border-border-disabled': disabled,
                },
            )}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onDragOver={onDragOver}
            onDrop={onDrop}>
            <label htmlFor="fileInput" className="flex cursor-pointer flex-col items-center gap-space-05">
                <UploadFile className={cn('size-space-05 text-icon-default group-hover:text-icon-success', { 'text-disabled': disabled })} />
                <span
                    id="dragDropLabel"
                    className={cn('text-body-02 font-medium text-text-display group-hover:text-text-success', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {strings.Attachments.dragFiles}
                </span>
                <span
                    className={cn('text-caption-01 text-text-paragraph-primary group-hover:text-text-success', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {strings.formatString(strings.Attachments.maxSize, 5)}
                    {strings.Shared.comma} {strings.formatString(strings.Attachments.allowedFormats, acceptedExtensions.join(', '))}
                </span>
                <Button
                    variant={'text'}
                    colors={'neutral'}
                    size={'sm'}
                    rounded={'default'}
                    disabled={isDragging || disabled}
                    onClick={onSelectFiles}
                    aria-label="browse files">
                    {strings.Attachments.browseFile}
                </Button>
            </label>
        </div>
    )
}

interface FileUploadProps {
    acceptedFormats?: AcceptedFormatsType
    onFileSelect?: (files: FileInfo[], updateCallback: (id: string, progress: number, status: FileInfo['status'], error?: string) => void) => void
    multiple?: boolean
    maxSize?: number
    disabled?: boolean
    maxFiles?: number
}

function FileUpload({
    acceptedFormats = DefaultAcceptedFormats,
    onFileSelect,
    multiple,
    disabled,
    maxSize = 1,
    maxFiles = Infinity,
}: FileUploadProps) {
    const { files, addFiles, removeFile, updateProgress, updateStatus } = useFileUpload()
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const isMaxFilesReached = files.length >= maxFiles

    const acceptedExtensions = Object.values(acceptedFormats).flat()
    const acceptAttribute = acceptedExtensions.join(',')

    const validateFile = useCallback(
        (file: File): { isValid: boolean; error?: string } => {
            if (file.size > maxSize * 1024 * 1024 || !acceptedFormats[file.type]) {
                return {
                    isValid: false,
                    error: strings.Attachments.error,
                }
            }
            return { isValid: true }
        },
        [acceptedFormats, maxSize],
    )

    const handleFiles = useCallback(
        (newFiles: File[]) => {
            const newFileInfos = newFiles.map(file => {
                const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9_.-]/g, '_')
                const sanitizedFile = new File([file], sanitizedFileName, { type: file.type })
                return {
                    id: `${file.name}-${Date.now()}-${window.crypto.getRandomValues(new Uint32Array(1))[0].toString(36).substring(2, 9)}`,
                    file: sanitizedFile,
                    progress: 0,
                    status: 'uploading' as const,
                }
            })

            addFiles(newFileInfos)

            newFileInfos.forEach(fileInfo => {
                const validation = validateFile(fileInfo.file)
                if (!validation.isValid) {
                    updateStatus(fileInfo.id, 'error', validation.error)
                }
            })

            const validFileInfos = newFileInfos.filter(fileInfo => {
                const validation = validateFile(fileInfo.file)
                return validation.isValid
            })

            if (onFileSelect) {
                onFileSelect(validFileInfos, updateProgress)
            }

            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        },
        [addFiles, onFileSelect, updateProgress, updateStatus, validateFile],
    )

    const handleDragEnter = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)
    }, [])

    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }, [])

    const handleDrop = useCallback(
        (e: React.DragEvent<HTMLDivElement>) => {
            e.preventDefault()
            e.stopPropagation()
            setIsDragging(false)
            handleFiles(Array.from(e.dataTransfer.files))
        },
        [handleFiles],
    )

    const handleFileInput = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.files) {
                handleFiles(Array.from(e.target.files))
            }
        },
        [handleFiles],
    )

    const handleSelectFiles = useCallback(() => {
        if (isMaxFilesReached) return
        fileInputRef.current?.click()
        fileInputRef.current?.focus()
    }, [isMaxFilesReached])

    return (
        <div className="mx-auto flex w-full flex-col gap-space-02">
            <ShouldRender shouldRender={multiple}>
                <DragAndDropArea
                    isDragging={isDragging}
                    disabled={disabled || isMaxFilesReached}
                    acceptedExtensions={acceptedExtensions}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onSelectFiles={handleSelectFiles}
                />
            </ShouldRender>
            <ShouldRender shouldRender={!multiple}>
                <SingleUploadFile
                    disabled={disabled || isMaxFilesReached}
                    acceptedExtensions={acceptedExtensions}
                    onSelectFiles={handleSelectFiles}
                    isSelectedFile={!!files.length}
                />
            </ShouldRender>
            <input
                type="file"
                accept={acceptAttribute}
                ref={fileInputRef}
                onChange={handleFileInput}
                className="hidden"
                id="fileInput"
                disabled={disabled || isMaxFilesReached}
                aria-describedby="fileInputDescription"
            />
            <FileList files={files} onRemove={removeFile} />
        </div>
    )
}

interface SingleUploadFileProps {
    disabled?: boolean
    acceptedExtensions: string[]
    onSelectFiles: () => void
    isSelectedFile?: boolean
}

const SingleUploadFile = ({ disabled, acceptedExtensions, isSelectedFile, onSelectFiles }: SingleUploadFileProps) => {
    return (
        <div className="space-y-space-04">
            <div className="space-y-space-02">
                <p
                    className={cn('text-body-02 text-form-field-text-label', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {strings.Attachments.uploadFiles}
                </p>
                <p
                    className={cn('text-caption-01 text-text-paragraph-primary group-hover:text-text-success', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {strings.formatString(strings.Attachments.maxSize, 5)}
                    {strings.Shared.comma} {strings.formatString(strings.Attachments.allowedFormats, acceptedExtensions.join(', '))}
                </p>
            </div>
            <ShouldRender shouldRender={!isSelectedFile}>
                <Button onClick={onSelectFiles} colors={'neutral'} rounded={'default'} size={'sm'} disabled={disabled}>
                    {strings.Attachments.browseFile}
                </Button>
            </ShouldRender>
        </div>
    )
}

export { FileUpload, type FileInfo }
