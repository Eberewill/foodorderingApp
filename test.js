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

         React.createElement("div", { className: "info-abs" },
    React.createElement("div", { className: "row" },
        React.createElement("div", { id: "infotainer" },
            React.createElement("div", { className: "infotainer-header" },
                React.createElement("div", { className: "info-header-block" },
                    React.createElement("div", { className: "info-header-constrain constrain-contact" },
                        React.createElement("h4", { className: "info-header-title" }, "Your Order Details"),
                        React.createElement("div", { className: "info-header-body" },
                            React.createElement("div", { className: "divider" }),

                            React.createElement("div", { id: "order-detail" },

                                React.createElement("div", { id: "order-customer-info" },
                                    React.createElement("div", { className: "customer-name customer" }, "Name: ", order.customer.firstname, " ", order.customer.lastname),
                                    React.createElement("div", { className: "customer-phone customer" },  "Your orderhas been recieved "),
                                    React.createElement("div", { className: "customer-phone customer" },  " our Ydelivery Guys will get it accross "),
                                )
                            )
                        )
                    ))
            )))
)