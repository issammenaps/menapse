import { IPage } from '@/admin/helpers/interfaces/IPage';
import { IComponent } from '@/admin/helpers/interfaces/IComponent'
import { addProps, deleteNestedItem, findNestedItem } from '@/helpers/helpers'
import { createModel } from '@rematch/core'
import { getPages,savepage,editpage } from '../../../services/pagesService';
const initialState: { page: string,editMode: boolean,  pageDetails: IPage , pages:IPage[] } = {
    editMode: false,
    page: "Index",
    pageDetails: {   
        _id:"",
        pagesloaded: false, 
        title: "",
        url: "",
        updated_at: "",
        created_at : "",
        author: "",
        content:{

            type: " ",
            icon : " ",
            id: " ",
            category:  "ATOMIC",
            props : {  },
            childrens : [] ,
        }
 
    }, 
    pages:[]
}
export const pageModel = createModel()({
    state: { ...initialState },
    reducers: {
        setPage(state, payload) {
            return {
                ...state,
                page: payload.page,
            }
        },
        setMode(state, payload) {
            return {
                ...state,
                editMode: payload.editMode,
            }
        },
        setPages(state, payload) {
            return {
                ...state,
                pages: payload.data,
                
            }
        },
        newPage(state) {
            return {
                ...state,
                page: "Page",

                pageDetails: {   
                    _id:"",
                    pagesloaded: false,
                    title: "untitled-page",
                    url: "url",
                    updated_at: "",
                    created_at : "",
                    author: "",
                    content:{
                        type: "Div",
                        id: "1",
                        category: "CONTAINER",
                        props: {},
                        childrens: []
                    }
             
                }, 

                // title: "untitled-page",
                // content: {
                //     type: "Div",
                //     id: "1",
                //     category: "CONTAINER",
                //     props: {className: ""},
                //     childrens: []
                // }
            }
        },
       editPage(state,payload) {  // payload type object
        console.log(payload)
            return {
                ...state,
                page: "Page", 
                pageDetails:  payload,
               
            }
        },
        addChild(state, payload) { 
            const content = (state.pageDetails as { content: IComponent }).content;

            findNestedItem(content, payload.id, payload.component)

            console.log(state);
            
            return state;

        },
        deleteElement(state, payload) {

            const content = (state.pageDetails as { content: IComponent }).content;
            if (content.id === payload) {
                content.childrens = []
                return state
            } else if (content.childrens) {
                deleteNestedItem(content.childrens, payload);

            }

            return state
        },

        addProps(state, payload){
            
            const content = (state.pageDetails as { content: IComponent }).content; //old
            addProps(content, payload.id, payload.props)
                        
            return state;

        }

    },
	effects: (dispatch) => ({

        
        async getPagesAsync(payload, rootState) {
			 const response = await getPages();
			if (response) { 

				 
			   this.setPages({ response: response })

				return response
			} else {
				this.setPages({ response: [] })
                return {}
			}

		},
        
		async addPagesAsync(payload, rootState) {
			let response = await savepage(payload);
			if (response) {
				console.log(payload)
				console.log(response)
				return response


			} else {
				console.log("else")

			}

		},
        async editPagesAsync(payload, rootState) {
			let response = await editpage(payload);
			if (response) {
				console.log(payload)
				console.log(response)
				return response


			} else {
				console.log("else")

			}

		},
	}),
})