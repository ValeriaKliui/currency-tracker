import { type TimelineDayData } from '@constants/interfaces/interfaces';
import { colors } from '@constants/styles/theme';

export const configChart = (dataTimeline: TimelineDayData[]) => {
    const data = {
        datasets: [
            {
                label: 'Weekly Sales',
                data: dataTimeline.map((day) => ({
                    x: day.time_open,
                    o: day.price_open,
                    h: day.price_high,
                    l: day.price_low,
                    c: day.price_close,
                    s: [day.price_open, day.price_close],
                })),
                backgroundColor: (ctx: any) => {
                    const {
                        raw: { o, c },
                    } = ctx;
                    return c >= o ? `${colors.greenBright}` : `${colors.red}`;
                },
            },
        ],
    };

    const horizontalLine = {
        id: 'horizontalLine',
        beforeDraw(chart: any) {
            const {
                ctx,
                chartArea: { left, width },
            } = chart;
            ctx.save();
            ctx.strokeStyle = `${colors.red}`;
            ctx.setLineDash([10, 21]);
            ctx.strokeRect(
                left,
                chart.getDatasetMeta(0).data[0].y -
                    chart.getDatasetMeta(0).data[0].height / 2,
                width,
                0,
            );
        },
    };
    const candlestick = {
        id: 'candlestick',
        beforeDatasetDraw(chart: any) {
            const {
                ctx,
                data,
                scales: { y },
            } = chart;
            ctx.save();
            ctx.lineWidth = 2;
            ctx.strokeStyle = 'white';

            data.datasets[0].data.forEach((datapoint: any, index: number) => {
                ctx.setLineDash([]);
                ctx.beginPath();
                ctx.moveTo(
                    chart.getDatasetMeta(0).data[index].x,
                    chart.getDatasetMeta(0).data[index].y,
                );
                ctx.lineTo(
                    chart.getDatasetMeta(0).data[index].x,
                    y.getPixelForValue(data?.datasets[0]?.data[index]?.h),
                );
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(
                    chart.getDatasetMeta(0).data[index].x,
                    chart.getDatasetMeta(0).data[index].y,
                );
                ctx.lineTo(
                    chart.getDatasetMeta(0).data[index].x,
                    y.getPixelForValue(data.datasets[0].data[index].l),
                );
                ctx.stroke();
            });
        },
    };
    const options = {
        parsing: {
            xAxisKey: 'x',
            yAxisKey: 's',
        },
        adapters: {
            date: {
                locale: 'enUS',
            },
        },
        scales: {
            x: {
                type: 'timeseries' as const,
                time: {
                    unit: 'day' as const,
                },
            },
            y: {
                stacked: true,
                beginAtZero: false,
                grace: '80%',
                grid: {
                    offset: true,
                },
            },
        },
    };

    const plugins = [candlestick, horizontalLine];
    return {
        data,
        options,
        plugins,
    };
};
