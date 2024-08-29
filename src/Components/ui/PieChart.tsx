import Highcharts, { ChartOptions, SeriesPieOptions } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import useLanguage from '../../Stores/useLanguage'

type seriesDataType = Omit<SeriesPieOptions, 'type'> & { y: number }
type SeriesType = {
    name: string
    data: seriesDataType[]
    colors?: string[]
    innerSize?: string
}[]

type LegendTotalType = string[]
type TotalAmount = string

export type PieChartProps = {
    seriesData: SeriesType
    legendTotal?: LegendTotalType
    title?: TotalAmount
    tooltipFormatter?: () => string
    width: number
    height: number
    chartOptions?: ChartOptions
    enableTooltip?: boolean
    center?: string[]
}

export const PieChart = ({ seriesData, title, tooltipFormatter, chartOptions, width = 200, height = 200, enableTooltip, center }: PieChartProps) => {
    const { dir } = useLanguage()
    const isRTL = dir === 'rtl'
    const reverseIfRTL = <T,>(arr: T[]): T[] => {
        return isRTL ? [...arr].reverse() : arr
    }
    const optionsPie = {
        chart: {
            type: 'pie',
            plotBorderWidth: null,
            plotShadow: false,
            width: width,
            height: height,
            margin: [0, 0, 0, 0],
            spacing: [0, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingRight: 0,
            spacingLeft: 0,
            backgroundColor: 'transparent',
            style: { margin: '0 auto' },
            ...chartOptions,
        },
        title: {
            text: title,
            floating: true,
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            x: 50,
            width: 100,
            useHTML: true,
            style: {},
        },
        tooltip: {
            enabled: enableTooltip,
            followPointer: false,
            formatter: tooltipFormatter ? tooltipFormatter : null,
        },
        plotOptions: {
            pie: {
                size: width > height ? width : height,
                states: {
                    hover: {
                        enabled: true,
                        halo: {
                            size: 0,
                            opacity: 0.25,
                        },
                    },
                },
                allowPointSelect: false,
                cursor: 'pointer',
                dataLabels: { enabled: false },
                showInLegend: false,
                startAngle: -90,
                endAngle: 90,
                center: center ?? ['50%', '147%'],
                innerSize: '85%',
                borderWidth: 0,
                borderRadius: 0,
            },
        },
        series: [
            {
                ...seriesData[0],
                data: reverseIfRTL(seriesData[0]?.data || []),
                colors: seriesData[0]?.colors ? reverseIfRTL(seriesData[0].colors) : undefined,
                borderWidth: 0,
                groupPadding: 0,
                pointPadding: 0,
                grouping: false,
                shadow: false,
            },
        ],
    }

    return <HighchartsReact highcharts={Highcharts} options={optionsPie} />
}
