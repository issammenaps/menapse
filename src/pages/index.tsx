

import { getPageByUrl } from "@/services/pagesService"
import CreatePage from "@/admin/helpers/pageCreator/PageCreator";

export async function getServerSideProps(context: any) {

    
    const res =  await getPageByUrl("index");
    const pageData = res?.data?.content; 
    return {
      props: {
        pageData
      }
    }
  }

export default function Index({pageData}: any){

    return CreatePage(pageData);
}
