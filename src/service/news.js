import {news_url,country_code,topic,lang,token} from '../configs/config';

export async function getNews(topic='sports'){
    try{
        let news= await fetch(`${news_url}?topic=${topic}&country=${country_code}&lang=${lang}&token=${token}`);
        let result = await news.json();
        news = null;
        return result.articles
    }
    catch(error){
        throw error;
    }
}