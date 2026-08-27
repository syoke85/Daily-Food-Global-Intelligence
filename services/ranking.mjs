export function score(article){const weights={relevance:.25,businessImpact:.2,strategicImportance:.2,novelty:.15,industryImpact:.1,recency:.1};const raw=Object.values(weights).reduce((sum,w)=>sum+w*Number(article.scores?.[Object.keys(weights)[Object.values(weights).indexOf(w)] ]||0),0);return Math.round(raw*100)/100}
export function priorityLevel(score){return score>=80?'CRITICAL':score>=65?'HIGH IMPACT':score>=45?'WATCH':'EMERGING'}
export function duplicateKey(title){return title.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fff ]/gi,'').split(/\s+/).filter(Boolean).slice(0,12).join(' ')}
