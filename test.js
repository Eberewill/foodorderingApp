var country = ["Norway", "Sweden", "Denmark"];
        var capital = ["Oslo", "Stockholm" , "Copenhagen"]
        var table= document.createElement('table'),
            thead = document.createElement('thead'),
            tbody = document.createElement('tbody'),
            th,
            tr,
            td;
            th = document.createElement('th'),          
            th.innerHTML="County";
            table.appendChild(th);
            th = document.createElement('th'); 
            th.innerHTML= "Capital"
            table.appendChild(th);
            table.appendChild(thead);            
            table.appendChild(tbody);
            
            document.body.appendChild(table);
         for(var i=0;i<country.length;i++){
            tr = document.createElement('tr'),
            //for county
            td= document.createElement('td');
            td.innerHTML=country[i];
            tr.appendChild(td);

            //for capital
            td = document.createElement('td');
            td.innerHTML=capital[i];
            tr.appendChild(td);
            tbody.appendChild(tr);
         }