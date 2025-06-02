export interface TableColumn {
    id: string;
    header: string;
    cell: (row: any) => string;
    isAction?: boolean;
}

export const columnsPreview: TableColumn[] = [{
        id: 'symbolicGrade',
        header: 'Symbol',
        cell: (row) => row.symbolicGrade
    },
    {
        id: 'minPercentage',
        header: 'Min Percentage',
        cell: (row) => `${row.minPercentage}%` || ''
    },
    {
        id: 'maxPercentage',
        header: 'Max Percentage',
        cell: (row) => `${row.maxPercentage}%` || ''
    },
    {
        id: 'descriptiveGrade',
        header: 'Description',
        cell: (row) => row.descriptiveGrade || ''
    },
]

export const columns: TableColumn[] = [
    ...columnsPreview,
    {
        id: 'action',
        header: 'Action',
        isAction: true,
        cell: () => ''
    }
];