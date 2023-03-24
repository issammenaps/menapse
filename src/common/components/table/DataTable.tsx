import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import IDataTable from "./IDataTable";
import { useDispatch, useSelector } from 'react-redux';
import { stringToKey } from "@/helpers/helpers";

export default function DataTable({ tableHead, tableData, title,handleEdit }: IDataTable) {
  //const dispatch = useDispatch();
  // const handleEdit = (tdata: any) => {
  //   console.log(tdata)
  //   dispatch.pageModel.setMode({ editMode: true, })
  //   dispatch.pageModel.editPage(tdata)



  // }
  return (<Card className="mt-4 p-2">
    <CardBody>
      <div className="d-flex justify-content-between">
        <div>
          <CardTitle tag="h5">
            {title}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            There are currently {tableData.length} items
          </CardSubtitle>
        </div>
        <div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></button>
            </div>
          </div>
        </div>

      </div>

      <div className="table-responsive">
        <Table className="text-nowrap mt-3 align-middle" borderless>
          <thead>
            <tr>
              {tableHead.map((item: any, index: number) => {
                return (
                  <th className={item.className} >{item.title}</th>
                )
              })}
              <th >Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((tdata, index) => (

              <tr key={index} className="border-top">
                {tableHead.map((thead, index) =>
                (
                  <td>
                    {stringToKey(thead.title) === 'flag' ? <img className="mb-0" src={tdata[stringToKey(thead.title)]}></img> :

                      <h6 className="mb-0">{tdata[stringToKey(thead.title)]}</h6>
                    }

                  </td>
                )

                )}

                <td>
                  <div className="d-flex justify-content-start aligin-items-center">
                    <button className="btn" onClick={() => handleEdit(tdata)}> <i className="bi bi-pencil-square"></i></button>

                    <button className="btn" > <i className="bi bi-trash3-fill"></i></button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  </Card>)
}