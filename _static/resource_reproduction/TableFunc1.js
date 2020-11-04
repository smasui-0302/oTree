function $E(id_){ return document.getElementById(id_); }
function hiTable(){}
hiTable.set_td=function (tr,row,col_max){
   for(var c=0;c<row.length;++c){
      var td= document.createElement('td');
      if(c>=col_max)td.style.display='none'; // <col>の数以上非表示
      tr.appendChild(td);
      td.innerHTML=row[c];
      }
   }
hiTable.set_th=function (tr,row,col_max){
   for(var c=0;c<row.length;++c){
      var td= document.createElement('th');
      if(c>=col_max)td.style.display='none'; // <col>の数以上非表示
      tr.appendChild(td);
      td.innerHTML=row[c];
      }
   }
hiTable.set_table=function(tbl,param){
   var thead=tbl.getElementsByTagName('thead')[0];
   var tbody=tbl.getElementsByTagName('tbody')[0];
   var tcols=tbl.getElementsByTagName('col');
   var col_max=1000000;
   if( tcols!=undefined && tcols.length!=0){// <col>がある場合数取得
      col_max=tcols.length;
      }
   var d_start=0;
   if( thead!=undefined ){ // <thead>がある場合先頭行セット
      thead.innerHTML='';  // thead内容クリア
      var tr= document.createElement('tr');
      thead.appendChild(tr);
      hiTable.set_th(tr,param[0],col_max);
      d_start=1;
      }
   tbody.innerHTML=''; // tbody内容クリア
   for(var n=d_start;n<param.length;++n){
      var tr= document.createElement('tr');
      tbody.appendChild(tr);
      hiTable.set_td(tr,param[n],col_max);
      }
   }

// http://k-hiura.cocolog-nifty.com/blog/2013/08/htmltablejs-520.html