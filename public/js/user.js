/* eslint-disable no-unused-vars */
$(document).ready(function() {
    //   var $newItemInput = $("input.new-item");
    //   var $tableDataRow = $("fullRow");
    //   $(document).on("submit", "#goal-form", insertGoal);
    //   var goals = [];
    //   var newStep = [];
    //   getGoals();
    
    // function updateGoal(goal) {
        //   $.ajax({
            //     method: "PUT",
            //     url: "/public/registration",
            //     data: goal
            //   }).then(getGoals);
            // }
            
            //   getSteps();
            
            //   function createTableRow() {
                //     $tableDataRow.empty();
                //     var rowToAdd = [];
                
                //     for (var i = 0; i < newStep.length; i++) {
                    //       rowToAdd.push(createNewRow(newStep[i]));
                    //     }
                    //     $tableDataRow.prepend(rowToAdd);
                    //   }
                    
                    //   function getSteps() {
                        //     $.get("/api/type/:goal", function(data) {
                            //       newStep = data;
                            //       createTableRow();
                            //     });
                            //   }
                            var elems = document.querySelectorAll('.dropdown-trigger');
                            var instances = M.Dropdown.init(elems);
                        });
                        
                        // Capture user input for the initial goal they have selected
                        // Use their input to correlate with the database to display the steps of their goal using the commented out Materialize table structure
                        
                        // Adding a new goal step
                        
                        // Capture user input from the second half of page (goal type and goal step).
// Create on.click event listener updates the database and the table with their 