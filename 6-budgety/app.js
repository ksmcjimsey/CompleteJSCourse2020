// Video 77 - Module Pattern in JS
//            Private and public data

// immediately invoked function expression (IIFE) that
// will return an object.  IIFE is an anonymous function
// wrapped in parethises.  Creates a new scope so the 
// variables can not be accessed from outside except
// for the returned variables in an object.
//
// No access from console to x
// No access to add function
// Do have access to publicTest function
//
// BUDGET CONTROLLER
var budgetController = (function() {
   
/*    // Hidden in IIFE
    var x = 23
    var add = function(a) {
        return x + a;
    }
    
    return {
        // This object gets returned.  Object containing publicTest variable.
        // Always has access to X and add function because a closure was created.
        publicTest: function (b) {
            //console.log(add(b));
            return add(b);
        }
    }*/
    
    // 1. Private functions
    // V81 - 1. function constructors because we want a lot of these objects
    //       This is for expenses and incomes
    //       Capital because it is a function constructors
    //       We don't put the methods in the constructors but we proto type
    //       them so copies are not made but the methods are inherited.  
    //       Most languages / compilers do this automatically with classes, 
    //       inheritance, and objects.
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;   // V95 - new place to hold items percent value
    };
    
    // V95 - add a prototype function to the expense function constructor
    Expense.prototype.calcPercentage = function(totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round( (this.value / totalIncome) * 100 );
        } else {
            this.percentage = -1;
        }
        
    };
    
    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };
    
    
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    
    // V86 - calculate the budget.
    //       type is either income "inc" or expense "exp"
    var calculateTotal = function (type) {
        var sum = 0;
        
        // Weird we can use type to get the array 
        data.allItems[type].forEach(function(cur) {
           sum +=  cur.value;
        });
        
        data.totals[type] = sum;
                                    
    };
    
    
    
    
    // 2. Data structure
    var allExpenses = [];   // Expense objects
    var allIncomes = [];      // Income objects
    var totalExpenses = 0;
    
    // 2. 1 - Object to hold all values.  Not sure why we go to this trouble yet.
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,      // V86
        percentage: -1
    };
    
    
    // 3. Public methods - instead of public keyword we put it in the return
    //    because all the values in the function are available even after it
    //    is returned.  The return value is public.
    return {
        
        addItem: function(type, des, val) {
            // 3.1 declare variables
            var newItem;    // Holds the new object
            var ID;         // Need an ID for each inc/exp object created
            
            // 3.2 create an ID
            //     find the last item and then get the ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // 3.3 Type will either be inc or exp.  Create new object for the new expense or income
            if (type === "exp") {
                // Create the new object with new keyword
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }
            
            // 3.4 Add the new object to the data All items data structure
            //     This is why we package up all the data types so they can 
            //     be send public as needed
            data.allItems[type].push(newItem);  // Use the type as a key to the data structure.
            
            // 3.5 the object above returns a public method but this data structure is 
            //     returned from the method call
            return newItem;
        },
        
        
        // V91 - Need type and ID to find item for removal
        deleteItem: function (type, id) {
            
            var ids, index;
            
            /*  Example: id = 3 and type inc
                Can't remove using id as array index.  Need to find the string
                in the DOM.
                ids = [1, 2, 4, 6, 8] and want to delete 6 then we need to find index = 3.
                We will loop over all the items and find it
                Third looping method we covered in JS (for, foreach, map)
                map returns a new array
            */
            ids = data.allItems[type].map(function(current) {
                return current.id;  // grabs the ids for each element and returns it into a new array.
            });
            
            // Index may be -1
            index = ids.indexOf(id);
            
            // Remove the item
            if (index > -1) {
                data.allItems[type].splice(index, 1);   // Delete starting at index and remove 1 item
            }
            
        },
        
        
        calculateBudget: function() {
            
            // V86 - calculate total income and expenses
            calculateTotal('exp');
            calculateTotal('inc');
            
            // V86 - calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // V86 - calculate the percentage of income spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round( (data.totals.exp / data.totals.inc) * 100 ).toFixed(2);
            } else {
                data.percentage = -1;
            }
            
        },
        
        
        // V95 - Calculate all expenses percentages
        calculatePercentages: function () {
            
            // Need to loop through and calculate the percentages
            // a = 20, b = 10, c = 40, d = 30 so income = 100
            // a% = 20/100 = 20%, b% = 10/100 = 10%, c% = 40 /100 = 40%
            data.allItems.exp.forEach(function(cur) {
                cur.calcPercentage(data.totals.inc);
            });
            
        },
        
        
        getPercentages: function () {
          
            // Foreach is used to loop and call something where 
            // map is used to update each value in the list.
            var allPerc = data.allItems.exp.map(function(cur) {
               return cur.getPercentage(); 
            });
            
            return allPerc;
            
        },
        
        
        getBudget: function () {
            
            // V86 - create an object on the fly to return.
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        
        
        testing: function () {
            console.log(data);
        }
        
    };
    
    
})();   // end of budgetController object



// IIFE in the controller to hide values we don't want
// changed outside of the module.
// Seperation of concerns - UIController does not manipulate
// the budgetController.  Use use the App controller to 
// communicate with the other two controllers
// UI controller gets values off of page
// What to do on the page
//
// UI CONTROLLER
var UIController = (function() {
    
    // 1. V79 - used incase the HTML classes change names.  We can change in one place.
    var domStrings = {
        inputType: ".add__type",
        inputDesc: ".add__description",
        inputValue: ".add__value",
        inputBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
        expensesPercLabel: ".item__percentage",
        dateLabel: ".budget__title--month"
    };
    
    
    // Private function
    // 1. V97 - Formating numbers
    var formatNumber = function(num, type) {

        /*  + or - before the number
            exactly 2 decimal points
            comma seperating the thousands

            2310.4567 --> 2,310.46
            2000 --> -2,000.00 if an expense
        */

        var num, sign, int, dec;

        // 1. get the absolute value
        num = Math.abs(num);

        // 2. get the right number of decimals
        num = num.toFixed(2);   // primative number converted to object.

        // 3. put in the commas
        numSplit = num.split(".");  // split into int and decimal parts
        int = numSplit[0];
        dec = numSplit[1];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3);
        }

        // 4. put the minus if an expense
        //type === "exp" ? sign = "-" : sign = "+";

        // 5. put together number and return
        //return sign + " " + int + "." + dec;
        return (type === "exp" ? "-" : "+") + " " + int + "." + dec;

    };
    
    
    // 2. Loop through list of items to add the percentage to it
    //    Could use a slice because a node list does not have forEach method.
    //    Instead we'll code a forEach ourselves
    var nodeListForEach = function(list, callback) {
        // node list does have a length property
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);       // Call the function passed in with the curernt element and the index.
        }
    };
    
    
    // Public method
    return {
        
        // 2. Get values from web page user inputs
        getinput: function() {
            return {
                type: document.querySelector(domStrings.inputType).value,  // gets either "inc" or "exp"
                description: document.querySelector(domStrings.inputDesc).value,
                value: parseFloat(document.querySelector(domStrings.inputValue).value)  // convert to a float
            };
        },
        
        // 3. V79 - Example of exposing intenal object to public
        //          Example of second public method due to return values
        getDomStrings: function() {
            return domStrings;
        },
        
        // 4. V83 - Third public method exposed
        //          This will add an item to the UI list of either income or expenses
        //          obj holds the id, descrption, and amount
        //          type is either inc or exp.
        addListItem: function (obj, type) {
            
            //console.log(obj, type);
            
            // 4.1Declare variables
            var html, newHtml, element;
            
            // 4.2 V83 - Create HTML string with placeholder text
            if (type === "inc") {
                html = '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
                
                element = domStrings.incomeContainer;
                //console.log(element);
                
            } else if (type === "exp") {
                html = '<div class="item clearfix" id="exp-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">---</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button </div> </div> </div>';
                
                element = domStrings.expensesContainer;
                //console.log(element);
            }

            
            // 4.3 V83 - Replace place holder text with actual data
            //console.log(html, obj.id);
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", formatNumber(obj.value, type) );    // Call the number formating function
            
            // 4.4 V83 Insert HTML into the DOM - insertAjacentHTML build in JS method
            //console.log(element);
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
            
        },   // End of add expense or income to list.
        
        
        // 5. V91 - Remove an item from the UI.  Need class or ID name.
        //          ID should look like: inc-2 or exp-1.
        //          in JS can only remove a child ID.
        deleteListItem: function (selectorID) {
            //console.log(selectorID);
            var el = document.getElementById(selectorID);
            //console.log(el, el.parentNode);
            el.parentNode.removeChild(el);  // Weird but how it works
        },
        
        
        // 6. V84 - Clear the entry after return or accept button
        clearFields: function () {
            
            // 5.1 V84 - query selector all
            //           allows multiple items from the page to be selected
            var fields, fieldsArray;
            
            // This returns a list and not an array.  Must convert to array
            // so we can loop over it.
            fields = document.querySelectorAll(domStrings.inputDesc + "," + domStrings.inputValue);
            
            // Convert a list to an array.  Array is the function constructor for all arrays.  Slice
            // thinks we passed array in so it returns an array out.
            fieldsArray = Array.prototype.slice.call(fields);
            
            // 5.2 V84 - foreach looping
            //           call back anonoymous function with three predefind arguements.
            fieldsArray.forEach(function (current, index, array) {
                current.value = "";     // Takes either the inputDesc or the inputValue and set so empty.
                
            });
            
            // 5.3 V84 - move focus back to description
            fieldsArray[0].focus();
        },
        
        
        // 7. V87 - Update numbers on page
        displayBudget: function (objBudget) {
            
            var type;
            objBudget.budget >= 0 ? type = "inc" : type = "exp";
            
            document.querySelector(domStrings.budgetLabel).textContent = formatNumber(objBudget.budget, type);
            document.querySelector(domStrings.incomeLabel).textContent = formatNumber(objBudget.totalInc, "inc");
            document.querySelector(domStrings.expensesLabel).textContent = formatNumber(objBudget.totalExp, "exp");
            
            if (objBudget.percentage > 0) {
                document.querySelector(domStrings.percentageLabel).textContent = objBudget.percentage + "%";
            } else {
                document.querySelector(domStrings.percentageLabel).textContent = "---";     // empty
            }
            
        },
        
        
        // 8. V96 - Display the percentages for each expense item
        //          Input is percentage array and output are % for each line
        displayPercentages: function (percentages) {
            
            // 1. select all off the page to create a list
            var fields = document.querySelectorAll(domStrings.expensesPercLabel);
            
            // 2. Call the function we made
            nodeListForEach(fields, function(current, index) {
                //console.log(current, index)
                if (percentages[index] > 0 ) {
                    // Take the current value in the list of nodes and add the percentage at that place.
                    current.textContent = percentages[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
            
        },
        
        
        // 9. V98 - Display the month
        displayMonth: function() {
            
            // vars
            var now, year, month;
            
            // Get the date right now
            now = new Date();
            
            // Get the year
            year = now.getFullYear();
            
            // get the month
            month = now.getMonth();
            
            // Thank you internet
            const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"];

            document.querySelector(domStrings.dateLabel).textContent = monthNames[month] + " " + year;
        },
        
        
        // 10. V99 - change the plus or minus on a new budget entry form
        //           called when a change even on the +/- drop down is changed
        changedType: function () {
            
            // Add or remove css styles is the best way to change the styles
            var fields = document.querySelectorAll(
                domStrings.inputType + "," +
                domStrings.inputDesc + "," +
                domStrings.inputValue
            );
            
            // Now we have a node list.  Can not use forEach so must use or own loop
            nodeListForEach(fields, function(cur) {
                
                cur.classList.toggle("red-focus");
                
            });
            
            // Change the color of the check button
            document.querySelector(domStrings.inputBtn).classList.toggle("red");
            
        },
        
        
        testGetDomStrings: function () {
            return domStrings;
        }
    };
    
    
})();   // End of User Interface Controller




// Application controller - takes two arguments which
// are the other two controllers.
// Better to pass in the other controllers in as arguments
// instead of just using them inside without passing.
// App controller responds to user events.
// When to do things on the page?
//
// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
/*    // Some code
    z = budgetCtrl.publicTest(5);
    
    // Pass z to the outside in an object anotherPublic.
    return {
        anotherPublic: function () {
            console.log(z);
        }
    }*/
    
    
    // Private functions
    // Group all our event listeners together
    // Now this needs to be called so we use a public
    // initialization function.  Seems like a constructor
    var setupEventListener = function () {
      
        // Values needed by listeners
        // Get strings from UI controller
        var dom = UICtrl.getDomStrings();
        
        // 1. User event listeners go in this controller
        //    Click on Add button.  First event listener
        //    Select element and then add listener
        document.querySelector(dom.inputBtn).addEventListener("click", ctrlAddItem);
    
        // 2. Press enter with value in add box.  Add strait to the document because it
        //    is a key press.
        //    e or event is the value for the keypress passed in.  Second listener
        document.addEventListener("keypress", function(event) {
            //console.log(event);
            //console.log(event.keyCode);

            // 1. Verify the event is enter key pressed - keycode === 13
            if (event.keyCode === 13 || event.which === 13) {
                //console.log("Enter was Pressed");
                ctrlAddItem();
            }
        });
        
        // 3. V90 - Add third event listener.  Listen for the remove button on a budget item to be
        //          clicked.  These do not exist at the start of the app so we have to use a parent
        //          to find the button.  Click anywhere in the parent container this is called.
        document.querySelector(dom.container).addEventListener("click", ctrlDeleteItem);
        
        // 4. V99 - Add event listener for the changing of the + to a -
        document.querySelector(dom.inputType).addEventListener("change", UICtrl.changedType);
    
        
    };
    
    
    // V85 - update the budget and display
    var updateBudget = function () {
        
        // 1. V86 - Calculate the budget
        budgetCtrl.calculateBudget();   // calls the budget method to calculate the budget.
        
        // 2. V86 - Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. V87 - Display the budget on the UI
        //console.log("Budget: ", budget);
        UICtrl.displayBudget(budget);
        
    };
    
    
    // V94 - Update each item percentage
    var updatePercentages = function () {
        
        // 1. Calculate the percentages on the budget controller
        budgetCtrl.calculatePercentages();
        
        // 2. Read from budget controller
        var percentages = budgetCtrl.getPercentages();
        
        // 3. Update the user interface
        //console.log(percentages);
        UICtrl.displayPercentages(percentages);
        
        
        
    };
    
    // Custom functions - do not repeat yourself (DRY)
    //
    // Add key or return
    var ctrlAddItem = function () {
        
        //console.log("working");
        
        // Declare variables
        var input, newItem;
        
        // 1. Get the filed input data
        input = UICtrl.getinput();
        //console.log(input);

        // V85 - Only do if input is not empty
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
            // 2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            //console.log(newItem);

            // 3. V83 - Add the item to the UI - object and input type from above
            //console.log(newItem, input.type);
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear the fields
            UICtrl.clearFields();

            // 5. Calculate and update the budget on the UI
            updateBudget();
            
            // 6. Calculate and update percentages for each item
            updatePercentages();
        }
        
    };
    
    
    // V90 - When the container holding each item is clicked the event listener calls
    //       this function.  We put event here but when called we did not pass it.
    //       It is automatic.
    var ctrlDeleteItem = function(event) {
        // We see the icon but we need the parent node.  This is traversing the DOM.
        // We go four levels up from the target and grap the ID
        //console.log(event.target.parentElement.parentElement.parentElement.parentElement.id);
        
        var itemID;
        
        // Not to bad to hard code because the html is also in this app
        itemID = event.target.parentElement.parentElement.parentElement.parentElement.id;
        
        // Only works because we don't have other ID in the sub section of the DOM
        if (itemID) {
            
            // Split this up to type and number: inc-1
            // Array of strings: ["inc", "1"]
            splitID = itemID.split("-");
            type = splitID[0];
            Id = parseInt(splitID[1]);  // Convert to integer so we can use it as an array index
            
            // V91 - 1. delete item from the data structure
            budgetCtrl.deleteItem(type, Id);
            
            // V92 - 2. delete the item from the UI
            UICtrl.deleteListItem(itemID);
            
            // V91 - 3. Update and show the new budget
            updateBudget();     // Updates the numbers
            
            // V94 - 4. Calculate and update percentages for each item
            updatePercentages();
        }
        
    };
    
    
    // Public methods
    // This is the visable things from the object.
    // init is called upon loading
    return {
        init: function() {
            console.log ("Applicaton has started.");
            
            UICtrl.displayMonth();
            
            UICtrl.displayBudget({      // Create the object on the fly and pass in zeros.
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            
            setupEventListener();
        }
    };
    
    
})(budgetController, UIController);     // End of App Controller



// Main start
controller.init();

