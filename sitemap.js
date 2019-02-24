// JavaScript Document

//<![CDATA[
var postTitle = postUrl = postDate = postSum = postLabels = new Array(),
sortBy = 'datenewest',
tocLoaded = false,
numChars = 250,
postFilter = '',
tocdiv = document.getElementById('sitemap2'),
totalEntires = 0,
totalPosts = 0;
function sitemap2(t){function e(){if("entry"in t.feed){var e=t.feed.entry.length;if(totalEntires+=e,totalPosts=t.feed.openSearch$totalResults.$t,totalPosts>totalEntires){var s=document.createElement("script");s.type="text/javascript",startindex=totalEntires+1,s.setAttribute("src","/feeds/posts/summary?start-index="+startindex+"&max-results=9999&alt=json-in-script&callback=sitemap2"),tocdiv.appendChild(s)}for(var o=0;e>o;o++){for(var a,l=t.feed.entry[o],r=l.title.$t,i=l.published.$t.substring(0,10),n=0;n<l.link.length;n++)if("alternate"==l.link[n].rel){a=l.link[n].href;break}if("content"in l)var p=l.content.$t;else if("summary"in l)var p=l.summary.$t;else var p="";var c=/<\S[^>]*>/g;if(p=p.replace(c,""),p.length>numChars){p=p.substring(0,numChars);var d=p.lastIndexOf(" ");p=p.substring(0,d)+"..."}var f="";if("category"in l){for(var n=0;n<l.category.length;n++)f+="<a href=\"javascript:filterPosts('"+l.category[n].term+"');\" title=\"Click here to select all posts with label '"+l.category[n].term+"'\">"+l.category[n].term+"</a>,  ";var u=f.lastIndexOf(",");-1!=u&&(f=f.substring(0,u))}postTitle.push(r),postDate.push(i),postUrl.push(a),postSum.push(p),postLabels.push(f)}}totalEntires==totalPosts&&(tocLoaded=!0,showToc())}e(),sortPosts(sortBy),tocLoaded=!0}function filterPosts(t){postFilter=t,displayToc(postFilter)}function allPosts(){postFilter="",displayToc(postFilter)}function sortPosts(t){function e(t,e){var s=postTitle[t];postTitle[t]=postTitle[e],postTitle[e]=s;var s=postDate[t];postDate[t]=postDate[e],postDate[e]=s;var s=postUrl[t];postUrl[t]=postUrl[e],postUrl[e]=s;var s=postSum[t];postSum[t]=postSum[e],postSum[e]=s;var s=postLabels[t];postLabels[t]=postLabels[e],postLabels[e]=s}for(var s=0;s<postTitle.length-1;s++)for(var o=s+1;o<postTitle.length;o++)"titleasc"==t&&postTitle[s]>postTitle[o]&&e(s,o),"titledesc"==t&&postTitle[s]<postTitle[o]&&e(s,o),"dateoldest"==t&&postDate[s]>postDate[o]&&e(s,o),"datenewest"==t&&postDate[s]<postDate[o]&&e(s,o)}function displayToc(t){var e=0,s="",o="Judul",a="Klik untuk mengurutkan berdasarkan judul",l="Tanggal",r="Klik untuk mengurutkan berdasarkan tanggal",i="Label",n="";"titleasc"==sortBy&&(a+=" (descending)",r+=" (newest first)"),"titledesc"==sortBy&&(a+=" (ascending)",r+=" (newest first)"),"dateoldest"==sortBy&&(a+=" (ascending)",r+=" (newest first)"),"datenewest"==sortBy&&(a+=" (ascending)",r+=" (oldest first)"),""!=postFilter&&(n="Klik untuk melihat semua postingan"),s+='<table>',s+="<thead>",s+="
<tr>",s+="<th>",s+='<a href="javascript:toggleTitleSort();" title="'+a+'">'+o+"</a>",s+="</th>",s+="<th>",s+='<a href="javascript:toggleDateSort();" title="'+r+'">'+l+"</a>",s+="</th>",s+="<th>",s+='<a href="javascript:allPosts();" title="'+n+'">'+i+"</a>",s+="</th>",s+="</tr>
",s+="</thead>",s+="<tbody>";for(var p=0;p<postTitle.length;p++)""==t?(s+='
<tr><td><a href="'+postUrl[p]+'" title="'+postSum[p]+'">'+postTitle[p]+"</a></td><td>"+postDate[p]+"</td><td>"+postLabels[p]+"</td></tr>
",e++):(z=postLabels[p].lastIndexOf(t),-1!=z&&(s+='
<tr><td><a href="'+postUrl[p]+'" title="'+postSum[p]+'">'+postTitle[p]+"</a></td><td>"+postDate[p]+"</td><td>"+postLabels[p]+"</td></tr>
",e++));if(s+="</tbody>",s+="</table>
",e==postTitle.length)var c='<div class="judul">
Total Post: '+postTitle.length+"</div>
";else{var c='<div class="judul">
Menampilkan '+e+" post berlabel '";c+=postFilter+"' dari "+postTitle.length+" total post.</div>
"}tocdiv.innerHTML=c+s}function toggleTitleSort(){sortBy="titleasc"==sortBy?"titledesc":"titleasc",sortPosts(sortBy),displayToc(postFilter)} function toggleDateSort(){sortBy="datenewest"==sortBy?"dateoldest":"datenewest",sortPosts(sortBy),displayToc(postFilter)}function showToc(){if(tocLoaded){displayToc(postFilter);document.getElementById("toclink")}else alert("Just wait. Sitemap is loading....")} function hideToc(){var t=document.getElementById("toc");t.innerHTML="";var e=document.getElementById("toclink");e.innerHTML='<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle(\'toc-result\',\'blind\');">� Show Sitemap</a>'}var postTitle=new Array,postUrl=new Array,postDate=new Array,postSum=new Array,postLabels=new Array,sortBy="datenewest",tocLoaded=!1,numChars=250,postFilter="",tocdiv=document.getElementById("sitemap2"),totalEntires=0,totalPosts=0;
//]]>