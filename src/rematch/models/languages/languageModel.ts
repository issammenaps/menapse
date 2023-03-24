import ILanguage from '@/admin/helpers/interfaces/Ilanguage'
import { getAllLanguages, saveLanguage } from '@/services/language/languageService';
import { createModel } from '@rematch/core'

const initialState: { languages: ILanguage[], isloaded: boolean } = {
    isloaded: false,
    languages: []

}
export const languageModel = createModel()({
    state: { ...initialState },
    reducers: {

        setLanguages(state, payload) {
            return {
                ...state,
                languages: payload.data,
            }
        },
        setIsLoading(state, payload){

            return {
                ...state,
                isloaded: payload

            }
        }

     

    },
    effects: (dispatch) => ({

        
        async getLanguageAsync() {
			 const response = await getAllLanguages();
			if (response) { 				 
			   this.setLanguages({ data: response.data })
				return response
			} else {
				this.setLanguages({ response: [] })
                return {}
			}

		},

        async saveLanguage(payload, rootState) {
			let response = await saveLanguage(payload);
			if (response) {
				console.log(response);
                
				return response


			} else {
				console.log("else")

			}

		},



	}),

})