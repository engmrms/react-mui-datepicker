import { CheckCircle, Info } from 'google-material-icons/filled'
import { Close, UploadFile } from 'google-material-icons/outlined'

import { cn } from '../Lib'
import ActionLoader from './ActionLoader'
import { Button } from './ui/button'

import { ReactNode, useCallback, useEffect, useRef, useState } from 'react'
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
    status?: 'uploading' | 'success' | 'error'
    error?: string
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
            <div className="flex items-center justify-between truncate p-space-02">
                <div className="flex gap-space-02">
                    {file.status === 'uploading' && <ActionLoader />}
                    {file.status === 'success' && <CheckCircle className="text-icon-success" />}
                    {file.status === 'error' && <Info className="text-icon-error" />}
                    <span className="text-body-01 font-medium text-text-default">{file.file.name}</span>
                </div>
                <Button
                    variant={'text'}
                    size={'icon-xs'}
                    rounded={'default'}
                    colors={'neutral'}
                    onClick={() => onRemove(file.id)}
                    aria-label={`remove file ${file.file.name}`}
                    className="mix-blend-multiply dark:mix-blend-normal">
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

interface DragAndDropAreaProps extends SharedProps {
    isDragging: boolean
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
    maxSize,
    onDragEnter,
    onDragLeave,
    onDragOver,
    onDrop,
    onSelectFiles,
    browseLabel,
    description,
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
                    {description
                        ? description
                        : `${strings.formatString(strings.Attachments.maxSize, maxSize || 0)}${strings.Shared.comma} ${strings.formatString(strings.Attachments.allowedFormats, acceptedExtensions.join(', '))}`}
                </span>
                <Button
                    variant={'text'}
                    colors={'neutral'}
                    size={'sm'}
                    rounded={'default'}
                    disabled={isDragging || disabled}
                    onClick={onSelectFiles}
                    aria-label="browse files">
                    {browseLabel ?? strings.Attachments.browseFile}
                </Button>
            </label>
        </div>
    )
}

type FileUploadState = {
    validFiles: FileInfo[]
    invalidFiles: FileInfo[]
}
interface SharedProps {
    maxSize?: number
    description?: string | ReactNode
    label?: string
    browseLabel?: string
    isRequired?: boolean
    disabled?: boolean
}

interface FileUploadProps extends SharedProps {
    multiple?: boolean
    maxFiles?: number
    customError?: string
    isInvalid?: boolean
    value?: FileInfo[]
    acceptedFormats?: AcceptedFormatsType
    onFileSelect?: (files: FileInfo[], updateCallback: (id: string, progress: number, status?: FileInfo['status'], error?: string) => void) => void
    onChange: (files: FileInfo[]) => void
}

function FileUpload({
    acceptedFormats = DefaultAcceptedFormats,
    onFileSelect,
    multiple,
    disabled,
    maxSize = 1,
    maxFiles = Infinity,
    customError,
    isInvalid,
    isRequired,
    label,
    browseLabel,
    description,
    value = [],
    onChange,
}: FileUploadProps) {
    const [state, setState] = useState<FileUploadState>({
        validFiles: value,
        invalidFiles: [],
    })
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const isMaxFilesReached = state.validFiles.length >= maxFiles

    const acceptedExtensions = Object.values(acceptedFormats).flat()
    const acceptAttribute = acceptedExtensions.join(',')

    useEffect(() => {
        if (!value.length) return
        setState(prev => ({
            validFiles: value,
            invalidFiles: prev.invalidFiles,
        }))
    }, [value])

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
            const validFiles: FileInfo[] = []
            const invalidFiles: FileInfo[] = []

            newFiles.forEach(file => {
                const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9\u0600-\u06FF ._-]/g, '_')
                const invalid = validateFile(file)
                if (!invalid.isValid) {
                    invalidFiles.push({
                        id: `${file.name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                        file: new File([file], sanitizedFileName, { type: file.type }),
                        progress: 0,
                        status: 'error',
                        error: invalid.error,
                    })
                    return
                }

                validFiles.push({
                    id: `${file.name}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                    file: new File([file], sanitizedFileName, { type: file.type }),
                    progress: 0,
                    status: onFileSelect ? 'uploading' : 'success',
                })
            })

            const updatedValidFiles = [...state.validFiles, ...validFiles]

            setState({
                validFiles: updatedValidFiles,
                invalidFiles: [...state.invalidFiles, ...invalidFiles],
            })

            // Only notify about valid files
            onChange(updatedValidFiles)

            if (onFileSelect && validFiles.length) {
                onFileSelect(validFiles, (id, progress, status = 'uploading', error) => {
                    const updatedFiles = updatedValidFiles.map(f => (f.id === id ? { ...f, progress, status, error } : f))
                    setState(prev => ({
                        validFiles: updatedFiles,
                        invalidFiles: prev.invalidFiles,
                    }))
                    onChange(updatedFiles)
                })
            }

            if (fileInputRef.current) {
                fileInputRef.current.value = ''
            }
        },
        [state.validFiles, state.invalidFiles, onChange, validateFile, onFileSelect],
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

    const handleRemoveFile = useCallback(
        (id: string) => {
            const isInvalid = state.invalidFiles.some(f => f.id === id)
            if (isInvalid) {
                // Remove from invalid files
                setState(prev => ({
                    validFiles: prev.validFiles,
                    invalidFiles: prev.invalidFiles.filter(f => f.id !== id),
                }))
            } else {
                // Remove from valid files
                const updatedFiles = state.validFiles.filter(f => f.id !== id)
                setState(prev => ({
                    validFiles: updatedFiles,
                    invalidFiles: prev.invalidFiles,
                }))
                onChange(updatedFiles)
            }
        },
        [state.validFiles, state.invalidFiles, onChange],
    )

    const allFilesToDisplay = [...state.validFiles, ...state.invalidFiles]

    return (
        <div className={cn('mx-auto flex w-full flex-col gap-space-02', { 'rounded-1 border border-error p-space-02': isInvalid })}>
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
                    maxSize={maxSize}
                    browseLabel={browseLabel}
                    description={description}
                />
            </ShouldRender>
            <ShouldRender shouldRender={!multiple}>
                <SingleUploadFile
                    disabled={disabled || isMaxFilesReached}
                    acceptedExtensions={acceptedExtensions}
                    onSelectFiles={handleSelectFiles}
                    isSelectedFile={!!value.length || !!state.invalidFiles.length}
                    maxSize={maxSize}
                    isRequired={isRequired}
                    label={label}
                    browseLabel={browseLabel}
                    description={description}
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
            <FileList files={allFilesToDisplay} onRemove={handleRemoveFile} />
            <ShouldRender shouldRender={!value.length && !!customError}>
                <div className="text-caption-01 text-text-error">{customError}</div>
            </ShouldRender>
        </div>
    )
}

interface SingleUploadFileProps extends SharedProps {
    acceptedExtensions: string[]
    onSelectFiles: () => void
    isSelectedFile?: boolean
}

const SingleUploadFile = ({
    disabled,
    acceptedExtensions,
    isSelectedFile,
    onSelectFiles,
    maxSize,
    isRequired,
    label,
    browseLabel,
    description,
}: SingleUploadFileProps) => {
    return (
        <div className="space-y-space-04">
            <div className="space-y-space-02">
                <div
                    className={cn('text-body-02 text-form-field-text-label', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {label ?? strings.Attachments.uploadFiles}
                    <ShouldRender shouldRender={isRequired}>
                        <span className="ms-space-01 text-error">*</span>
                    </ShouldRender>
                </div>
                <p
                    className={cn('text-caption-01 text-text-paragraph-primary group-hover:text-text-success', {
                        'text-disabled-text-default-disabled': disabled,
                    })}>
                    {description
                        ? description
                        : `${strings.formatString(strings.Attachments.maxSize, maxSize || 0)}${strings.Shared.comma} ${strings.formatString(strings.Attachments.allowedFormats, acceptedExtensions.join(', '))}`}
                </p>
            </div>
            <ShouldRender shouldRender={!isSelectedFile}>
                <Button onClick={onSelectFiles} colors={'neutral'} rounded={'default'} type={'button'} size={'sm'} disabled={disabled}>
                    {browseLabel ?? strings.Attachments.browseFile}
                </Button>
            </ShouldRender>
        </div>
    )
}

export { FileUpload, type FileInfo }
