
// ---------------------------BAR GRAPH---------------------//

var ctx = document.getElementById("myChart");

new Chart(ctx, {
    type: "bar",
    data: {
        labels:["Jan","Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        color: "#4285F4",
        datasets: [
            {
                data:[10000, 40000, 30000, 28000, 9000, 38000, 40000, 42000, 44000, 46000, 50000, 28000],
                label:"Amount per Month",
                backgroundColor: ["#4285F4", "#4285F4", 
                                  "#4285F4", "#4285F4", 
                                  "#4285F4", "#4285F4", 
                                  "#4285F4", "#4285F4", 
                                  "#4285F4", "#4285F4", 
                                  "#4285F4", "#4285F4"
                                ],

            
                                borderColor: "#4285F4",
                                borderWidth: 2,
                                borderRadius: 10, 
                                borderSkipped: 'bottom'               
            }
        ]
    },
    
        options:{
            responsive:false,
            layout:{
                padding: {
                    left: 50,
                    right: 0,
                    top: 50,
                    bottom: 0,
                },
                legend:{
                    display:true,
                    position: "bottom",
                    align:"end",
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
      
})

// ----------------------- PIE CHART-------------------//
var ctx = document.getElementById("pieChart");
new Chart(ctx, {
    type: "doughnut",
    data: {
        labels:["Net Banking", "UPI"],
        datasets: [
            {
                data:[5463, 1500],
                label:"Mode of transaction",
                backgroundColor: ["#4285F4", "orange"],
                
            }
        ]
    },
    options: {
        responsive: false,
        layout:{
            padding: {
                left: 80,
                right: 0,
                top: 50,
                bottom: 0,
            },
        },
      }
})