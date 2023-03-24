import ILanguage from "@/admin/helpers/interfaces/Ilanguage";
import { API_SITE_CORPO } from "../api_endpoint";
import { http  } from '../http';
 


 
export const saveTranslation = async (translation: any) => {  
	try {
		
		let endPoint= API_SITE_CORPO.TRANSLATION
		let { data } = await http.post(endPoint,translation);

		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};