export default interface IDataTable{

    title?: string
    tableHead: {[key: string]: any}[]
    tableData: {[key: string]: any}[]
    handleEdit :any
}