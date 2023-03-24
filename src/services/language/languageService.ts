import ILanguage from "@/admin/helpers/interfaces/Ilanguage";
import { API_SITE_CORPO } from "../api_endpoint";
import { http  } from '../http';
 

export const getAllLanguages = async ( ) => {  
	try {
		let x=API_SITE_CORPO.LANGUAGE 
		let { data } = await http.get(x);
		
		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};
 
export const saveLanguage = async (language: ILanguage) => {  
	try {
		let endPoint= API_SITE_CORPO.LANGUAGE 
		let { data } = await http.post(endPoint,language);

		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};