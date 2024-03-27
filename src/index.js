//Here we're importing items we'll need. You can add other imports here.


import data from "./data";

console.log(data) ;

var table = new DataTable('#example', {








    footerCallback: function (row, data, start, end, display) {
        let api = this.api();
 
        // Remove the formatting to get integer data for summation
        let intVal = function (i) {
            return typeof i === 'string'
                ? i.replace(/[\$,]/g, '') * 1
                : typeof i === 'number'
                ? i
                : 0;
        };
 
        // Total over all pages
        balance = api
            .column(10, { page: 'current' })
            .data()
            .reduce((a, b) => intVal(a) + intVal(b), 0);
 
        // Total over this page
        total = api
            .column(11, { page: 'current' })
            .data()
            .reduce((a, b) => intVal(a) + intVal(b), 0);
 
        // Update footer
        api.column(10).header().innerHTML =
            'Balance $' + balance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ; 

            // Update footer
            api.column(11).header().innerHTML =
                'Total $' + total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;
    },










    language: {
        searchPanes: {
            count: '{total} found',
            countFiltered: '{shown} / {total}'
        }
    },  
    paging: false,
    data: data,
    scrollY: '500px',
    scrollCollapse: true,
    columnDefs: [
        {
            searchPanes: {
                show: false
            },
            title:'Inv',
            targets: [0]
        },{
            searchPanes: {
                show: false
            },
            title:'Cus',
            targets: [1]
        },{
            searchPanes: {
                show: false
            },
            title:'Loc',
            targets: [2]
        },{
            searchPanes: {
                show: false
            },
            title:'Date',
            targets: [3]
        },{
            searchPanes: {
                show: false
            },
            title:'bgId',
            targets: [4],
            visible: false
        },{
            searchPanes: {
                show: true
            },
            title:'Aging',
            targets: [5]
        },{
            searchPanes: {
                show: false
            },
            title:'Days',
            visible: false,
            targets: [6]
        },{
            searchPanes: {
                show: true
            },
            title:'Customer Name',
            targets: [7]
        },{
            searchPanes: {
                show: true
            },
            title:'Location Name',
            targets: [8]
        },{
            searchPanes: {
                show: true
            },
            title:'Reps',
            targets: [9]
        },{
            searchPanes: {
                show: false
            },
            title:'Balance',
            targets: [10],
            render: DataTable.render.number( null, null, 2, '$' )
        },{
            searchPanes: {
                show: false
            },
            title:'Total',
            targets: [11],
            render: DataTable.render.number( null, null, 2, '$' )
        }
    ],
    layout: {
        top1: 'searchPanes'
    }
        }
    
);