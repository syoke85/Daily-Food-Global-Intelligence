import {GenericRssAdapter} from './generic.mjs';
export const sources=[
 new GenericRssAdapter({sourceName:'Sin Chew Daily',sourceUrl:'https://www.sinchew.com.my/',rssUrl:process.env.SINCHEW_RSS_URL,language:'zh',category:'World Peace',subcategory:'International Affairs'}),
 new GenericRssAdapter({sourceName:'Nanyang Siang Pau',sourceUrl:'https://www.enanyang.my/',rssUrl:process.env.NANYANG_RSS_URL,language:'zh',category:'World Peace',subcategory:'International Affairs'}),
 new GenericRssAdapter({sourceName:'FoodNavigator',sourceUrl:'https://www.foodnavigator.com/',rssUrl:process.env.FOODNAVIGATOR_RSS_URL||'https://www.foodnavigator.com/arc/outboundfeeds/rss/',language:'en',category:'Food Science',subcategory:'Oils & Fats'})
].filter(x=>x.rssUrl);
