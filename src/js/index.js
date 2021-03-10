require("@babel/polyfill");
import Search from "./model/Search";

// Web app төлөв
// Хайлтын query үр дүн 
// Тухайн үзүүлж байгаа жор
// Лайкласан жорууд
// Захиалж байгаа найрлаганууд

const state = {};
const controlSearch = async () => {
    // Вэбээс хайлтын түлхүүр үгийг гаргаж авна.
    const query = 'pizza';
    if(query){
        // Шинээр хайлтын обьектийг үүсгэж өгнө.
        state.Search = new Search(query);
        // Хайлт хийх зориулж дэлгэцийн UI бэлтгэнэ.
        // Хайлтыг гүйцэтгэнэ.
        await state.Search.doSearch();
        // Хайлтын үр дүнг дэлгэцэнд үзүүлнэ.
        console.log(state.Search.result);
    }

};

document.querySelector(".search").addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
