import DataTable from "@/common/components/table/DataTable";
import PageHeader from "@/common/layout/headers/page-header/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useContext } from 'react';


// useeffect ncahrgi beha les pages 1ere etape
const tableHead = [
  {
    title: "Title",
    className: "w-50"
  },
  {
    title: "Author",
    className: ""
  },
  {
    title: "Date",
    className: ""
  }
]
const tableData = [
  {
    title: "index",
    author: "dev_1",
    date: "23/02/2023",
  },
  {
    title: "about",
    author: "dev_1",
    date: "23/02/2023",
  },
];
// REPLACE tableData WITH DATA FROM REMATCCH
export default function Index() { 
  
  const [pages, setpages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {

    const getPages = async () => {

      dispatch.pageModel.getPagesAsync().then((res: any) => {
        setIsLoading(false);
        //  dispatch.cvs.UPDATE("cvisloaded", true); 
        console.log(res);
        setpages(res.data)
      }
      );
    }
    getPages();
  }, []);
  const dispatch = useDispatch()
  const handleEdit = (tdata: any) => {
    console.log(tdata)
    dispatch.pageModel.setMode({ editMode: true, })
    dispatch.pageModel.editPage(tdata)

  }
  function newPage() {
    dispatch.pageModel.newPage()
  }


  const actions = [
    {
      name: "add new page",
      icon: "bi bi-plus",
      action: newPage
    }
  ]

  return isLoading && pages ? (
    <> </>
  ) : (

    <>
      <PageHeader title="pages" actions={actions} />
      <DataTable title="List of pages" tableData={pages} tableHead={tableHead} handleEdit={handleEdit} />
      {/* get all pages */}
    </>

  )
}