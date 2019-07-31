{ //this works
    function getValue() {

        var myArray = [];

        document.querySelectorAll('.checks').forEach(function(input) {
            if (input.type === 'checkbox' && input.checked) {
                myArray.push(input.value);
            }
        });
        var length = document.getElementById('textInput').value;
        console.log(myArray);
        console.log(length);
    }
    //this works
    function selectAll() {
        document.querySelectorAll('.checks').forEach(function(input) {
            if (input.type === 'checkbox') {
                input.checked = true;
            }
        });
    }
    //this works
    function unSelectAll() {
        document.querySelectorAll('.checks').forEach(function(input) {
            if (input.type === 'checkbox') {
                input.checked = false;
            }
        });
    }
    //can't get this to work
    function updateTextInput(val) {
        document.getElementById('textInput').value = val;
    }
    //this works
    function dropdownMenu() {
        var x = document.getElementById("checkboxes");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
	//these all work except for the slider
    document.addEventListener('DOMContentLoaded', function() {
        var runButton = document.getElementById('runButton');
        // onClick's logic below:
        runButton.addEventListener('click', function() {
            getValue();
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var selectAllChars = document.getElementById('selectAll');
        // onClick's logic below:
        selectAllChars.addEventListener('click', function() {
            selectAll();
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var unSelectAllChars = document.getElementById('unselectAll');
        // onClick's logic below:
        unSelectAllChars.addEventListener('click', function() {
            unSelectAll();
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var charactersMenu = document.getElementById('passwordRulesetButton');
        // onClick's logic below:
        charactersMenu.addEventListener('click', function() {
            dropdownMenu();
        });
    });
    document.addEventListener('DOMContentLoaded', function() {
        var slider = document.getElementById('slider');
        // onClick's logic below:
        slider.addEventListener('onchange', function() {
            updateTextInput();
        });
    });

};