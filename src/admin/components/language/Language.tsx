import DataTable from "@/common/components/table/DataTable";
import PageHeader from "@/common/layout/headers/page-header/PageHeader";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const tableHead: any = [
    {
        title: "Language",
        className: "w-50"
    },
    {
        title: "ISO Code",
        className: ""
    },
    {
        title: "Flag",
        className: ""
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




export default function Language() {

    const languagesIsloaded = useSelector((state: any) => state.languageModel.isloaded);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {


        const getLanguages = async () => {
            if (languagesIsloaded == false) {

                dispatch.languageModel.getLanguageAsync().then((res: any) => {
                    setIsLoading(true);
                    dispatch.languageModel.setIsLoading(isLoading)
                    console.log(isLoading);
                    
                })
            } else {
                setIsLoading(false);
                return;
            }; 
        }

        getLanguages();


    }, []);

    const languages = useSelector((state: any) => state.languageModel.languages);


    const dispatch = useDispatch();

    function newLanguage() {
        dispatch.pageModel.setPage({ page: "EditLanguage" })
    }

    const actions = [
        {
            name: "add new language",
            icon: "bi bi-plus",
            action: newLanguage
        }
    ]
    return (
        isLoading && <>
            <PageHeader title="Languages" actions={actions} />
            <DataTable title="List of languages" tableData={languages} tableHead={tableHead} />


        </>
    )
}