 
import { API_SITE_CORPO } from './api_endpoint';
import { http  } from './http';
 

 

export const getpage = async (id:any) => {  
	console.log(process.env.REACT_APP_BACKEND)
	try {
		let x=API_SITE_CORPO.PAGE+id
		console.log(x)
		let { data } = await http.get(x);
		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};

export const getPageByUrl = async (slug: string)=>{

	console.log(slug);

	try {
		let x=API_SITE_CORPO.PAGE+"/"+slug
		console.log(x)
		let { data } = await http.get(x);
		return data;
	} catch (error) {
		console.error(error); 
		 
	}

}
 
export const getPages = async ( ) => {  
	console.log(process.env.REACT_APP_BACKEND)
	try {
		let x=API_SITE_CORPO.PAGE 
		console.log(x)
		let { data } = await http.get(x);
		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};
 
export const savepage = async ( objectpage:object) => {  
	console.log(process.env.REACT_APP_BACKEND)
	try {
		let x=API_SITE_CORPO.PAGE   
		let { data } = await http.post(x,objectpage);
		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};
export const editpage = async ( objectpage:any) => {  
	console.log(process.env.REACT_APP_BACKEND)
	try {
		console.log(objectpage)
		let x=API_SITE_CORPO.PAGE +"/"+  objectpage.id
		let { data } = await http.put(x,objectpage);
		return data;
	} catch (error) {
		console.error(error); 
		 
	}
};