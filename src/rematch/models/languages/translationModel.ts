
import { saveTranslation } from '@/services/translation/translationService';
import { createModel } from '@rematch/core'

const initialState: {translation: any} = {
   translation: {}

}
export const translationModel = createModel()({
    state: { ...initialState },
    reducers: {

        addTranslation(state, payload) {

            Object.keys(payload).map((tr, index)=>{
                if(state.translation[tr]){
                    state.translation[tr] = {...state.translation[tr], ...payload[tr] };
                }else{
                    Object.assign(state.translation, {[tr]: payload[tr]});
                }
            })
            
            return state
         
        },

        getTranslation(state){

            return state;
        }
    
     

    },
    effects: (dispatch) => ({

        async addTranslationAsync(translation: any) {
          
			let response = await saveTranslation(translation);
			if (response) {
				
				return response

			} else {
				console.log("else")

			}

		},

        
       

        



	}),

})