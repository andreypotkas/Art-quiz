import images from './assets/image-data/images';

const category ={
    render: ()=>{
        const splitArr =(arr, chunks)=>[
            ...Array(chunks),
        ].map((_, c)=>arr.filter((n, index)=>index % chunks==c));
        const questionsByAuthor =[];
        const questionsByName =[];
        images.forEach((item, index)=>{
            if(index%2==0){
                questionsByAuthor.push(item);
            }
            if(index%2!=0){
                questionsByName.push(item);
            }
        });
        const categoryQuestionsByAuthor =splitArr(questionsByAuthor, 12);
        const categoryQuestionsByName =splitArr(questionsByName, 12);

        const questions ={
            categoryQuestionsByAuthor,
            categoryQuestionsByName
        }
        return questions;
    },
    after_render: async()=>{}
};
export default category;