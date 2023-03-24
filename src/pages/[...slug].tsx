import CreatePage from "@/admin/helpers/pageCreator/PageCreator";
import { getPageByUrl } from "@/services/pagesService"
import { useEffect } from "react";

export async function getServerSideProps(context: any) {
    const { slug } = context.query;

    if(slug != 'globals2.css'){
        const res =  await getPageByUrl(slug);
        const pageData = res?.data?.content ?? null; //await res.json()
        return {
          props: {
            pageData
          }
        }
    }
   
  }

  function Page({ pageData }: any) {


  

    return pageData && CreatePage(pageData);
  }
  
  export default Page