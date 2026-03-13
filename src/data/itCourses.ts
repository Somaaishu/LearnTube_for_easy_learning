import { Course } from '@/types/course';

export const itCourses: Course[] = [
  {
    id: 'python-basics',
    title: 'Python Basics',
    category: 'it',
    level: 'beginner',
    description: 'Learn Python programming from scratch. Master variables, data types, control flow, functions, and more.',
    icon: '🐍',
    modules: [
      {
        id: 'py-m1',
        title: 'Introduction to Python',
        topics: [
          {
            id: 'py-m1-t1',
            title: 'What is Python & Setting Up',
            explanation: 'Python is a high-level, interpreted programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python has become one of the most popular languages in the world. It is used in web development, data science, artificial intelligence, automation, and more. To get started, you need to install Python from python.org and use an IDE like VS Code or PyCharm.',
            examples: ['Python is used by companies like Google, Netflix, and Instagram.', 'Python files use the .py extension.'],
            codeExample: '# Your first Python program\nprint("Hello, World!")\n\n# Checking Python version\nimport sys\nprint(sys.version)',
            keyConceptsLearned: ['Python is an interpreted language', 'Python is beginner-friendly', 'Python runs on all major operating systems'],
            quiz: [
              { question: 'Who created Python?', options: ['James Gosling', 'Guido van Rossum', 'Dennis Ritchie', 'Bjarne Stroustrup'], correctAnswer: 1, explanation: 'Guido van Rossum created Python in 1991.' },
              { question: 'Which function prints output in Python?', options: ['show()', 'print()', 'display()', 'output()'], correctAnswer: 1, explanation: 'print() is the built-in function used to display output in Python.' },
              { question: 'What file extension do Python files use?', options: ['.python', '.pt', '.py', '.pn'], correctAnswer: 2, explanation: 'Python files use the .py extension.' },
            ],
          },
          {
            id: 'py-m1-t2',
            title: 'Variables and Data Types',
            explanation: 'Variables in Python are containers for storing data values. Unlike other languages, Python has no command for declaring a variable — it is created the moment you assign a value. Python has several built-in data types including integers (int), floating-point numbers (float), strings (str), and booleans (bool). Python is dynamically typed, meaning you do not need to specify the type of a variable.',
            examples: ['age = 25 creates an integer variable', 'name = "Alice" creates a string variable', 'price = 19.99 creates a float variable'],
            codeExample: '# Variables and data types\nname = "Alice"\nage = 25\nheight = 5.6\nis_student = True\n\nprint(type(name))    # <class \'str\'>\nprint(type(age))     # <class \'int\'>\nprint(type(height))  # <class \'float\'>\nprint(type(is_student))  # <class \'bool\'>',
            keyConceptsLearned: ['Variables store data values', 'Python is dynamically typed', 'Common types: int, float, str, bool'],
            quiz: [
              { question: 'Which data type stores decimal numbers?', options: ['int', 'str', 'float', 'bool'], correctAnswer: 2, explanation: 'float is used for decimal/floating-point numbers.' },
              { question: 'What does type() function do?', options: ['Creates a type', 'Returns the data type', 'Converts types', 'Deletes a type'], correctAnswer: 1, explanation: 'type() returns the data type of a variable.' },
              { question: 'Is Python dynamically typed?', options: ['Yes', 'No', 'Only for strings', 'Only for numbers'], correctAnswer: 0, explanation: 'Python is dynamically typed — you don\'t need to declare variable types.' },
            ],
          },
          {
            id: 'py-m1-t3',
            title: 'Operators and Expressions',
            explanation: 'Operators are symbols that perform operations on variables and values. Python supports arithmetic operators (+, -, *, /, //, %, **), comparison operators (==, !=, >, <, >=, <=), logical operators (and, or, not), and assignment operators (=, +=, -=, etc.). Expressions combine values and operators to produce results.',
            examples: ['5 + 3 gives 8 (addition)', '10 // 3 gives 3 (floor division)', '2 ** 3 gives 8 (exponentiation)'],
            codeExample: '# Arithmetic operators\nprint(10 + 3)   # 13\nprint(10 - 3)   # 7\nprint(10 * 3)   # 30\nprint(10 / 3)   # 3.333...\nprint(10 // 3)  # 3 (floor division)\nprint(10 % 3)   # 1 (modulus)\nprint(2 ** 3)   # 8 (power)\n\n# Comparison\nprint(5 > 3)    # True\nprint(5 == 3)   # False',
            keyConceptsLearned: ['Arithmetic operators perform math operations', 'Comparison operators return boolean values', '// is floor division, ** is exponentiation'],
            quiz: [
              { question: 'What does // do in Python?', options: ['Regular division', 'Floor division', 'Modulus', 'Power'], correctAnswer: 1, explanation: '// performs floor division, returning the integer part of the division.' },
              { question: 'What does 2 ** 4 evaluate to?', options: ['6', '8', '16', '24'], correctAnswer: 2, explanation: '** is the exponentiation operator. 2 ** 4 = 2×2×2×2 = 16.' },
              { question: 'Which operator checks equality?', options: ['=', '==', '!=', '==='], correctAnswer: 1, explanation: '== checks if two values are equal. = is for assignment.' },
            ],
          },
        ],
      },
      {
        id: 'py-m2',
        title: 'Control Flow and Functions',
        topics: [
          {
            id: 'py-m2-t1',
            title: 'Conditional Statements',
            explanation: 'Conditional statements allow your program to make decisions. The if statement executes code when a condition is True. You can add elif (else if) for additional conditions and else as a fallback. Python uses indentation to define code blocks, unlike other languages that use curly braces.',
            examples: ['if age >= 18: print("Adult")', 'elif checks additional conditions', 'else runs when no conditions are True'],
            codeExample: 'age = 20\n\nif age < 13:\n    print("Child")\nelif age < 18:\n    print("Teenager")\nelse:\n    print("Adult")\n\n# Nested conditions\nscore = 85\nif score >= 60:\n    if score >= 90:\n        print("Excellent!")\n    else:\n        print("Passed!")',
            keyConceptsLearned: ['if/elif/else for decision making', 'Python uses indentation for blocks', 'Conditions evaluate to True or False'],
            quiz: [
              { question: 'What keyword is used for additional conditions?', options: ['else if', 'elif', 'elseif', 'elsif'], correctAnswer: 1, explanation: 'Python uses elif (short for else if) for additional conditions.' },
              { question: 'How does Python define code blocks?', options: ['Curly braces', 'Parentheses', 'Indentation', 'Semicolons'], correctAnswer: 2, explanation: 'Python uses indentation (typically 4 spaces) to define code blocks.' },
              { question: 'What runs when no if/elif conditions are True?', options: ['Nothing', 'elif block', 'else block', 'Error occurs'], correctAnswer: 2, explanation: 'The else block executes when none of the if/elif conditions are True.' },
            ],
          },
          {
            id: 'py-m2-t2',
            title: 'Loops in Python',
            explanation: 'Loops allow you to execute code repeatedly. Python has two main loop types: for loops and while loops. For loops iterate over sequences (lists, strings, ranges). While loops continue as long as a condition is True. You can use break to exit a loop early and continue to skip to the next iteration.',
            examples: ['for i in range(5) loops from 0 to 4', 'while count > 0 loops until count reaches 0', 'break exits the loop immediately'],
            codeExample: '# For loop\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# While loop\ncount = 3\nwhile count > 0:\n    print(count)\n    count -= 1\n\n# Loop with break\nfor num in range(10):\n    if num == 5:\n        break\n    print(num)  # 0, 1, 2, 3, 4',
            keyConceptsLearned: ['for loops iterate over sequences', 'while loops repeat until condition is False', 'break and continue control loop flow'],
            quiz: [
              { question: 'What does range(3) generate?', options: ['1, 2, 3', '0, 1, 2', '0, 1, 2, 3', '1, 2'], correctAnswer: 1, explanation: 'range(3) generates 0, 1, 2 — starting from 0 and going up to but not including 3.' },
              { question: 'Which keyword exits a loop early?', options: ['stop', 'exit', 'break', 'end'], correctAnswer: 2, explanation: 'break immediately exits the current loop.' },
              { question: 'When does a while loop stop?', options: ['After 10 iterations', 'When condition is False', 'When break is called only', 'Never'], correctAnswer: 1, explanation: 'A while loop stops when its condition evaluates to False.' },
            ],
          },
          {
            id: 'py-m2-t3',
            title: 'Functions',
            explanation: 'Functions are reusable blocks of code that perform specific tasks. You define a function using the def keyword. Functions can take parameters (inputs) and return values using the return statement. Functions help organize code, reduce repetition, and make programs easier to understand and maintain.',
            examples: ['def greet(name): defines a function with one parameter', 'return sends a value back to the caller', 'Default parameters: def greet(name="World")'],
            codeExample: '# Defining a function\ndef greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))  # Hello, Alice!\n\n# Function with default parameter\ndef add(a, b=0):\n    return a + b\n\nprint(add(5, 3))  # 8\nprint(add(5))     # 5\n\n# Function with multiple returns\ndef divide(a, b):\n    if b == 0:\n        return "Cannot divide by zero"\n    return a / b',
            keyConceptsLearned: ['def keyword defines functions', 'Parameters are function inputs', 'return sends values back to the caller'],
            quiz: [
              { question: 'Which keyword defines a function?', options: ['function', 'func', 'def', 'define'], correctAnswer: 2, explanation: 'The def keyword is used to define functions in Python.' },
              { question: 'What does return do?', options: ['Prints output', 'Sends value back to caller', 'Ends the program', 'Creates a variable'], correctAnswer: 1, explanation: 'return sends a value back to wherever the function was called.' },
              { question: 'Can a function have default parameters?', options: ['Yes', 'No', 'Only for strings', 'Only for numbers'], correctAnswer: 0, explanation: 'Functions can have default parameter values, e.g., def greet(name="World").' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'html-css-fundamentals',
    title: 'HTML & CSS Fundamentals',
    category: 'it',
    level: 'beginner',
    description: 'Master the building blocks of the web. Learn HTML structure and CSS styling to create beautiful web pages.',
    icon: '🌐',
    modules: [
      {
        id: 'html-m1',
        title: 'HTML Basics',
        topics: [
          {
            id: 'html-m1-t1',
            title: 'Introduction to HTML',
            explanation: 'HTML (HyperText Markup Language) is the standard language for creating web pages. It uses tags to define elements like headings, paragraphs, links, and images. Every HTML document starts with <!DOCTYPE html> and has a hierarchical structure with <html>, <head>, and <body> elements.',
            examples: ['<h1> creates a main heading', '<p> creates a paragraph', '<a href="url"> creates a hyperlink'],
            codeExample: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Page</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>This is my first web page.</p>\n    <a href="https://example.com">Visit Example</a>\n</body>\n</html>',
            keyConceptsLearned: ['HTML uses tags to structure content', 'DOCTYPE declares the document type', 'head contains metadata, body contains visible content'],
            quiz: [
              { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'Home Tool Markup Language'], correctAnswer: 0, explanation: 'HTML stands for HyperText Markup Language.' },
              { question: 'Which tag creates the largest heading?', options: ['<h6>', '<heading>', '<h1>', '<head>'], correctAnswer: 2, explanation: '<h1> creates the largest heading. Headings go from <h1> (largest) to <h6> (smallest).' },
              { question: 'Where does visible content go?', options: ['<head>', '<body>', '<title>', '<meta>'], correctAnswer: 1, explanation: 'Visible page content goes inside the <body> tag.' },
            ],
          },
          {
            id: 'html-m1-t2',
            title: 'HTML Elements and Attributes',
            explanation: 'HTML elements can have attributes that provide additional information. Common attributes include id, class, src, href, and alt. Elements can be block-level (take full width) like <div> and <p>, or inline (take only needed width) like <span> and <a>. Understanding the difference is crucial for layout.',
            examples: ['<img src="photo.jpg" alt="A photo"> — src and alt are attributes', '<div class="container"> — class is used for CSS styling', 'id="main" uniquely identifies an element'],
            codeExample: '<div id="main" class="container">\n    <img src="logo.png" alt="Company Logo" width="200">\n    <p class="intro">Welcome to our site.</p>\n    <ul>\n        <li>Item 1</li>\n        <li>Item 2</li>\n    </ul>\n</div>',
            keyConceptsLearned: ['Attributes provide extra info about elements', 'Block elements take full width, inline elements don\'t', 'id is unique, class can be reused'],
            quiz: [
              { question: 'Which attribute provides alternative text for images?', options: ['title', 'alt', 'src', 'text'], correctAnswer: 1, explanation: 'The alt attribute provides alternative text for images, used for accessibility.' },
              { question: 'Is <div> a block or inline element?', options: ['Inline', 'Block', 'Both', 'Neither'], correctAnswer: 1, explanation: '<div> is a block-level element that takes up the full width available.' },
              { question: 'Can multiple elements have the same id?', options: ['Yes', 'No', 'Only in forms', 'Only in tables'], correctAnswer: 1, explanation: 'Each id must be unique within a page. Use class for shared styling.' },
            ],
          },
        ],
      },
      {
        id: 'html-m2',
        title: 'CSS Styling',
        topics: [
          {
            id: 'html-m2-t1',
            title: 'CSS Selectors and Properties',
            explanation: 'CSS (Cascading Style Sheets) controls the visual presentation of HTML elements. Selectors target elements to style, and properties define the styles. Common selectors include element selectors (p), class selectors (.classname), and ID selectors (#idname). CSS can be applied inline, internally via <style>, or externally via linked stylesheets.',
            examples: ['color: red; changes text color', 'background-color: blue; changes background', 'font-size: 16px; sets text size'],
            codeExample: '/* Element selector */\nh1 {\n    color: #333;\n    font-size: 2rem;\n}\n\n/* Class selector */\n.card {\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n}\n\n/* ID selector */\n#header {\n    background: navy;\n    color: white;\n}',
            keyConceptsLearned: ['CSS selectors target HTML elements', 'Properties define visual styles', 'External stylesheets are preferred for maintainability'],
            quiz: [
              { question: 'Which selector targets a class?', options: ['#name', '.name', 'name', '*name'], correctAnswer: 1, explanation: 'Class selectors use a dot (.) prefix, like .classname.' },
              { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], correctAnswer: 1, explanation: 'CSS stands for Cascading Style Sheets.' },
              { question: 'Which property changes text color?', options: ['text-color', 'font-color', 'color', 'foreground'], correctAnswer: 2, explanation: 'The color property changes the text color of an element.' },
            ],
          },
          {
            id: 'html-m2-t2',
            title: 'Flexbox and Layout',
            explanation: 'Flexbox is a CSS layout model that makes it easy to align and distribute space among items in a container. Set display: flex on the parent, then use properties like justify-content, align-items, and flex-direction to control layout. Flexbox solves many traditional CSS layout challenges like vertical centering and equal-height columns.',
            examples: ['justify-content: center centers items horizontally', 'align-items: center centers items vertically', 'flex-direction: column stacks items vertically'],
            codeExample: '.container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 20px;\n}\n\n.card {\n    flex: 1;\n    padding: 20px;\n}\n\n/* Responsive column layout */\n@media (max-width: 768px) {\n    .container {\n        flex-direction: column;\n    }\n}',
            keyConceptsLearned: ['display: flex enables flexbox layout', 'justify-content controls horizontal alignment', 'Flexbox makes responsive layouts easy'],
            quiz: [
              { question: 'How do you enable flexbox?', options: ['display: block', 'display: flex', 'display: grid', 'display: inline'], correctAnswer: 1, explanation: 'display: flex on a container enables flexbox layout for its children.' },
              { question: 'Which property centers items vertically in flexbox?', options: ['justify-content', 'align-items', 'flex-direction', 'flex-wrap'], correctAnswer: 1, explanation: 'align-items: center vertically centers items in a flex container (with default row direction).' },
              { question: 'What does gap do in flexbox?', options: ['Adds padding', 'Adds margin', 'Adds space between items', 'Adds border'], correctAnswer: 2, explanation: 'gap adds space between flex items without affecting outer margins.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'sql-fundamentals',
    title: 'SQL Fundamentals',
    category: 'it',
    level: 'beginner',
    description: 'Learn to query and manage databases using SQL. Master SELECT, INSERT, UPDATE, DELETE and more.',
    icon: '🗃️',
    modules: [
      {
        id: 'sql-m1',
        title: 'Basic SQL Queries',
        topics: [
          {
            id: 'sql-m1-t1',
            title: 'SELECT and FROM',
            explanation: 'SQL (Structured Query Language) is used to communicate with databases. The SELECT statement retrieves data from tables. You specify which columns to retrieve and use FROM to indicate the table. SELECT * retrieves all columns. SQL is case-insensitive but conventions use uppercase for keywords.',
            examples: ['SELECT name FROM users; retrieves all names', 'SELECT * FROM products; retrieves all columns', 'SELECT name, email FROM users; retrieves specific columns'],
            codeExample: '-- Select all columns\nSELECT * FROM employees;\n\n-- Select specific columns\nSELECT first_name, last_name, salary\nFROM employees;\n\n-- Select with alias\nSELECT first_name AS "First Name",\n       salary AS "Annual Salary"\nFROM employees;',
            keyConceptsLearned: ['SELECT retrieves data from tables', 'FROM specifies the table', '* means all columns'],
            quiz: [
              { question: 'What does SELECT * do?', options: ['Deletes all rows', 'Selects all columns', 'Creates a table', 'Updates all rows'], correctAnswer: 1, explanation: 'SELECT * retrieves all columns from the specified table.' },
              { question: 'What does SQL stand for?', options: ['Simple Query Language', 'Structured Query Language', 'Standard Query Language', 'System Query Language'], correctAnswer: 1, explanation: 'SQL stands for Structured Query Language.' },
              { question: 'Which clause specifies the table?', options: ['WHERE', 'FROM', 'SELECT', 'INTO'], correctAnswer: 1, explanation: 'FROM specifies which table to retrieve data from.' },
            ],
          },
          {
            id: 'sql-m1-t2',
            title: 'WHERE and Filtering',
            explanation: 'The WHERE clause filters rows based on conditions. You can use comparison operators (=, <>, >, <), logical operators (AND, OR, NOT), and special operators (BETWEEN, IN, LIKE, IS NULL). WHERE is essential for retrieving specific data from large tables.',
            examples: ['WHERE age > 18 filters adults', 'WHERE name LIKE "A%" finds names starting with A', 'WHERE status IN ("active", "pending") checks multiple values'],
            codeExample: '-- Basic filtering\nSELECT * FROM employees\nWHERE salary > 50000;\n\n-- Multiple conditions\nSELECT * FROM employees\nWHERE department = \'Engineering\'\n  AND salary > 60000;\n\n-- Pattern matching\nSELECT * FROM employees\nWHERE name LIKE \'J%\';',
            keyConceptsLearned: ['WHERE filters rows by conditions', 'AND/OR combine multiple conditions', 'LIKE enables pattern matching'],
            quiz: [
              { question: 'Which operator finds patterns?', options: ['MATCH', 'FIND', 'LIKE', 'SEARCH'], correctAnswer: 2, explanation: 'LIKE is used for pattern matching with wildcards % and _.' },
              { question: 'What does WHERE salary > 50000 do?', options: ['Sets salary to 50000', 'Filters rows where salary exceeds 50000', 'Creates a salary column', 'Deletes low salaries'], correctAnswer: 1, explanation: 'WHERE salary > 50000 returns only rows where the salary column value is greater than 50000.' },
              { question: 'How do you check for NULL values?', options: ['= NULL', '== NULL', 'IS NULL', 'EQUALS NULL'], correctAnswer: 2, explanation: 'Use IS NULL (not = NULL) to check for NULL values in SQL.' },
            ],
          },
        ],
      },
      {
        id: 'sql-m2',
        title: 'Data Manipulation',
        topics: [
          {
            id: 'sql-m2-t1',
            title: 'INSERT, UPDATE, DELETE',
            explanation: 'Beyond querying, SQL lets you modify data. INSERT adds new rows, UPDATE changes existing data, and DELETE removes rows. Always use WHERE with UPDATE and DELETE to avoid modifying all rows. These commands are part of DML (Data Manipulation Language).',
            examples: ['INSERT INTO users (name) VALUES ("Alice")', 'UPDATE users SET age = 26 WHERE id = 1', 'DELETE FROM users WHERE id = 5'],
            codeExample: '-- Insert data\nINSERT INTO employees (name, department, salary)\nVALUES (\'Alice\', \'Engineering\', 75000);\n\n-- Update data\nUPDATE employees\nSET salary = 80000\nWHERE name = \'Alice\';\n\n-- Delete data\nDELETE FROM employees\nWHERE department = \'Temporary\';',
            keyConceptsLearned: ['INSERT adds new rows', 'UPDATE modifies existing rows', 'Always use WHERE with UPDATE/DELETE'],
            quiz: [
              { question: 'What happens if you UPDATE without WHERE?', options: ['Nothing', 'Error occurs', 'All rows are updated', 'First row is updated'], correctAnswer: 2, explanation: 'Without WHERE, UPDATE modifies ALL rows in the table.' },
              { question: 'Which command adds new data?', options: ['ADD', 'INSERT', 'CREATE', 'APPEND'], correctAnswer: 1, explanation: 'INSERT INTO is used to add new rows to a table.' },
              { question: 'Which command removes rows?', options: ['REMOVE', 'DROP', 'DELETE', 'ERASE'], correctAnswer: 2, explanation: 'DELETE FROM removes rows from a table based on conditions.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'javascript-basics',
    title: 'JavaScript Basics',
    category: 'it',
    level: 'beginner',
    description: 'Learn JavaScript to add interactivity to web pages. Cover variables, functions, DOM manipulation, and events.',
    icon: '⚡',
    modules: [
      {
        id: 'js-m1',
        title: 'JavaScript Fundamentals',
        topics: [
          {
            id: 'js-m1-t1',
            title: 'Variables and Types',
            explanation: 'JavaScript has three ways to declare variables: var (function-scoped, older), let (block-scoped, reassignable), and const (block-scoped, not reassignable). JavaScript types include string, number, boolean, undefined, null, object, and symbol. Modern JavaScript prefers let and const over var.',
            examples: ['const name = "Alice"; — cannot be reassigned', 'let age = 25; — can be reassigned', 'typeof variable returns the type as a string'],
            codeExample: '// Variable declarations\nconst name = "Alice";\nlet age = 25;\nlet isStudent = true;\n\n// Template literals\nconsole.log(`${name} is ${age} years old`);\n\n// Type checking\nconsole.log(typeof name);     // "string"\nconsole.log(typeof age);      // "number"\nconsole.log(typeof isStudent); // "boolean"',
            keyConceptsLearned: ['let and const are preferred over var', 'JavaScript is dynamically typed', 'Template literals use backticks for string interpolation'],
            quiz: [
              { question: 'Which keyword creates a constant?', options: ['var', 'let', 'const', 'fixed'], correctAnswer: 2, explanation: 'const declares a variable that cannot be reassigned.' },
              { question: 'What does typeof return?', options: ['The value', 'The type as a string', 'The variable name', 'An error'], correctAnswer: 1, explanation: 'typeof returns the type of a value as a string, like "string" or "number".' },
              { question: 'Which is block-scoped?', options: ['var', 'let', 'both', 'neither'], correctAnswer: 1, explanation: 'let (and const) are block-scoped, while var is function-scoped.' },
            ],
          },
          {
            id: 'js-m1-t2',
            title: 'Functions and Arrow Functions',
            explanation: 'Functions in JavaScript can be declared with the function keyword or as arrow functions (=>). Arrow functions provide shorter syntax and lexically bind "this". Functions can take parameters and return values. Higher-order functions accept other functions as arguments.',
            examples: ['function add(a, b) { return a + b; }', 'const add = (a, b) => a + b;', 'Array methods like .map() take functions as arguments'],
            codeExample: '// Traditional function\nfunction greet(name) {\n    return `Hello, ${name}!`;\n}\n\n// Arrow function\nconst greetArrow = (name) => `Hello, ${name}!`;\n\n// Higher-order function\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]',
            keyConceptsLearned: ['Arrow functions provide concise syntax', 'Functions are first-class citizens in JS', 'Higher-order functions accept functions as args'],
            quiz: [
              { question: 'What is the arrow function syntax?', options: ['function =>', '=>', '() => {}', '-> ()'], correctAnswer: 2, explanation: 'Arrow functions use the syntax (params) => { body } or (params) => expression.' },
              { question: 'What does .map() do?', options: ['Filters an array', 'Transforms each element', 'Sorts an array', 'Finds an element'], correctAnswer: 1, explanation: '.map() creates a new array by transforming each element with a function.' },
              { question: 'Are functions first-class in JavaScript?', options: ['Yes', 'No', 'Only arrow functions', 'Only named functions'], correctAnswer: 0, explanation: 'Functions are first-class citizens — they can be stored in variables, passed as arguments, and returned from functions.' },
            ],
          },
        ],
      },
      {
        id: 'js-m2',
        title: 'DOM and Events',
        topics: [
          {
            id: 'js-m2-t1',
            title: 'DOM Manipulation',
            explanation: 'The DOM (Document Object Model) represents the HTML page as a tree of objects. JavaScript can access and modify the DOM to dynamically change page content, structure, and style. Key methods include getElementById, querySelector, textContent, innerHTML, and classList.',
            examples: ['document.getElementById("title") selects an element', 'element.textContent = "New text" changes text', 'element.classList.add("active") adds a CSS class'],
            codeExample: '// Selecting elements\nconst title = document.getElementById("title");\nconst cards = document.querySelectorAll(".card");\n\n// Modifying content\ntitle.textContent = "Updated Title";\n\n// Creating elements\nconst newDiv = document.createElement("div");\nnewDiv.textContent = "New element";\nnewDiv.classList.add("card");\ndocument.body.appendChild(newDiv);',
            keyConceptsLearned: ['DOM represents HTML as a tree', 'querySelector selects elements like CSS', 'createElement and appendChild add new elements'],
            quiz: [
              { question: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Digital Object Manager', 'Dynamic Object Model'], correctAnswer: 1, explanation: 'DOM stands for Document Object Model.' },
              { question: 'Which method selects by ID?', options: ['querySelector', 'getElementById', 'getElement', 'selectById'], correctAnswer: 1, explanation: 'document.getElementById() selects a single element by its ID attribute.' },
              { question: 'How do you add a CSS class?', options: ['element.class = "name"', 'element.addClass("name")', 'element.classList.add("name")', 'element.css("name")'], correctAnswer: 2, explanation: 'element.classList.add("name") adds a CSS class to an element.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'data-structures-python',
    title: 'Data Structures in Python',
    category: 'it',
    level: 'intermediate',
    description: 'Master essential data structures: lists, stacks, queues, trees, and hash maps in Python.',
    icon: '🏗️',
    modules: [
      {
        id: 'ds-m1',
        title: 'Linear Data Structures',
        topics: [
          {
            id: 'ds-m1-t1',
            title: 'Lists and Arrays',
            explanation: 'Lists in Python are dynamic arrays that can hold mixed types. They support indexing, slicing, and various methods like append, insert, remove, and sort. Understanding time complexity is key: accessing by index is O(1), but searching is O(n). Lists are the most commonly used data structure in Python.',
            examples: ['my_list = [1, 2, 3] creates a list', 'my_list.append(4) adds to the end in O(1)', 'my_list[1:3] slices elements at index 1 and 2'],
            codeExample: '# List operations\nnumbers = [3, 1, 4, 1, 5, 9]\n\n# Append and insert\nnumbers.append(2)        # [3, 1, 4, 1, 5, 9, 2]\nnumbers.insert(0, 0)     # [0, 3, 1, 4, 1, 5, 9, 2]\n\n# Slicing\nprint(numbers[1:4])      # [3, 1, 4]\n\n# List comprehension\nsquares = [x**2 for x in range(5)]\nprint(squares)           # [0, 1, 4, 9, 16]',
            keyConceptsLearned: ['Lists are dynamic arrays in Python', 'Index access is O(1), search is O(n)', 'List comprehensions provide concise creation'],
            quiz: [
              { question: 'What is the time complexity of list index access?', options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'], correctAnswer: 1, explanation: 'Accessing a list element by index is O(1) — constant time.' },
              { question: 'What does append() do?', options: ['Adds to beginning', 'Adds to end', 'Removes last', 'Sorts list'], correctAnswer: 1, explanation: 'append() adds an element to the end of the list in O(1) time.' },
              { question: 'What does [1:3] return?', options: ['Elements at index 1, 2, 3', 'Elements at index 1, 2', 'Elements at index 0, 1, 2', 'Elements at index 1'], correctAnswer: 1, explanation: 'Slicing [1:3] returns elements at index 1 and 2 (end index is exclusive).' },
            ],
          },
          {
            id: 'ds-m1-t2',
            title: 'Stacks and Queues',
            explanation: 'Stacks follow LIFO (Last In, First Out) — think of a stack of plates. Queues follow FIFO (First In, First Out) — think of a line at a store. In Python, lists can be used as stacks, and collections.deque is efficient for queues. These structures are fundamental for algorithms like BFS and DFS.',
            examples: ['Stack: push (append) and pop operations', 'Queue: enqueue (append) and dequeue (popleft)', 'Browser back button uses a stack'],
            codeExample: 'from collections import deque\n\n# Stack using list\nstack = []\nstack.append(1)  # push\nstack.append(2)\nstack.append(3)\ntop = stack.pop()  # 3 (LIFO)\n\n# Queue using deque\nqueue = deque()\nqueue.append(1)    # enqueue\nqueue.append(2)\nqueue.append(3)\nfront = queue.popleft()  # 1 (FIFO)',
            keyConceptsLearned: ['Stack = LIFO, Queue = FIFO', 'Use list for stacks, deque for queues', 'Both are fundamental for many algorithms'],
            quiz: [
              { question: 'What does LIFO stand for?', options: ['Last In First Out', 'Last In Fast Out', 'Least In First Out', 'Linear In First Out'], correctAnswer: 0, explanation: 'LIFO = Last In, First Out — the last element added is the first removed.' },
              { question: 'Which Python module provides deque?', options: ['itertools', 'collections', 'functools', 'queue'], correctAnswer: 1, explanation: 'collections.deque provides an efficient double-ended queue.' },
              { question: 'Which data structure does browser "back" use?', options: ['Queue', 'Stack', 'Tree', 'Graph'], correctAnswer: 1, explanation: 'Browser history uses a stack — you go back to the most recently visited page.' },
            ],
          },
        ],
      },
      {
        id: 'ds-m2',
        title: 'Non-Linear Structures',
        topics: [
          {
            id: 'ds-m2-t1',
            title: 'Dictionaries and Hash Maps',
            explanation: 'Dictionaries (hash maps) store key-value pairs with O(1) average lookup time. Keys must be immutable (strings, numbers, tuples). Dictionaries are incredibly versatile and used everywhere in Python. They support methods like get(), keys(), values(), and items().',
            examples: ['user = {"name": "Alice", "age": 25}', 'user["name"] returns "Alice"', 'user.get("email", "N/A") returns default if key missing'],
            codeExample: '# Dictionary operations\nuser = {"name": "Alice", "age": 25, "city": "NYC"}\n\n# Access\nprint(user["name"])           # Alice\nprint(user.get("email", "N/A")) # N/A\n\n# Iterate\nfor key, value in user.items():\n    print(f"{key}: {value}")\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}\nprint(squares)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}',
            keyConceptsLearned: ['Dictionaries provide O(1) average lookup', 'Keys must be immutable', 'get() safely handles missing keys'],
            quiz: [
              { question: 'Average time complexity of dict lookup?', options: ['O(n)', 'O(1)', 'O(log n)', 'O(n²)'], correctAnswer: 1, explanation: 'Dictionary lookup is O(1) on average thanks to hash tables.' },
              { question: 'Can lists be dictionary keys?', options: ['Yes', 'No', 'Only empty lists', 'Only single-element lists'], correctAnswer: 1, explanation: 'Lists are mutable and cannot be used as dictionary keys. Use tuples instead.' },
              { question: 'What does .get() do vs []?', options: ['Same thing', 'Returns None/default if key missing', 'Faster lookup', 'Creates the key'], correctAnswer: 1, explanation: '.get() returns None or a default value if the key doesn\'t exist, instead of raising KeyError.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'react-development',
    title: 'React Development',
    category: 'it',
    level: 'intermediate',
    description: 'Build modern user interfaces with React. Learn components, state, props, hooks, and routing.',
    icon: '⚛️',
    modules: [
      {
        id: 'react-m1',
        title: 'React Fundamentals',
        topics: [
          {
            id: 'react-m1-t1',
            title: 'Components and JSX',
            explanation: 'React applications are built with components — reusable pieces of UI. Components are JavaScript functions that return JSX (a syntax extension that looks like HTML). Each component manages its own rendering logic. Components can be composed together to build complex interfaces.',
            examples: ['function Button() { return <button>Click</button> }', 'Components must return a single root element', '<MyComponent /> renders the component'],
            codeExample: '// Functional component\nfunction Greeting({ name }) {\n  return (\n    <div className="greeting">\n      <h1>Hello, {name}!</h1>\n      <p>Welcome to React.</p>\n    </div>\n  );\n}\n\n// Usage\nfunction App() {\n  return <Greeting name="Alice" />;  \n}',
            keyConceptsLearned: ['Components are reusable UI pieces', 'JSX combines HTML-like syntax with JavaScript', 'Props pass data to components'],
            quiz: [
              { question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'], correctAnswer: 0, explanation: 'JSX stands for JavaScript XML — it allows writing HTML-like syntax in JavaScript.' },
              { question: 'How are props passed to components?', options: ['Global variables', 'As attributes in JSX', 'Through imports', 'Via localStorage'], correctAnswer: 1, explanation: 'Props are passed as attributes: <Component name="value" />.' },
              { question: 'Can a component return multiple root elements?', options: ['Yes', 'No, must have single root', 'Only with arrays', 'Only with divs'], correctAnswer: 1, explanation: 'Components must return a single root element. Use fragments (<></>) to wrap multiple elements.' },
            ],
          },
          {
            id: 'react-m1-t2',
            title: 'State and Hooks',
            explanation: 'State is data that can change over time and triggers re-renders. The useState hook lets you add state to functional components. useEffect runs side effects like API calls. The rules of hooks: only call at the top level, only in React functions.',
            examples: ['const [count, setCount] = useState(0)', 'useEffect(() => { fetchData() }, []) runs once on mount', 'State updates trigger re-renders'],
            codeExample: 'import { useState, useEffect } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  \n  useEffect(() => {\n    document.title = `Count: ${count}`;\n  }, [count]);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}',
            keyConceptsLearned: ['useState manages component state', 'useEffect handles side effects', 'State changes cause re-renders'],
            quiz: [
              { question: 'What does useState return?', options: ['Just the value', 'Value and setter function', 'A ref object', 'A callback'], correctAnswer: 1, explanation: 'useState returns an array with [currentValue, setterFunction].' },
              { question: 'When does useEffect with [] run?', options: ['Every render', 'Only on mount', 'Only on unmount', 'Never'], correctAnswer: 1, explanation: 'useEffect with an empty dependency array [] runs only once when the component mounts.' },
              { question: 'Can you call hooks inside conditions?', options: ['Yes', 'No', 'Only useState', 'Only useEffect'], correctAnswer: 1, explanation: 'Hooks must be called at the top level — never inside conditions, loops, or nested functions.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'backend-nodejs',
    title: 'Backend with Node.js',
    category: 'it',
    level: 'intermediate',
    description: 'Build server-side applications with Node.js and Express. Learn APIs, middleware, and database integration.',
    icon: '🖥️',
    modules: [
      {
        id: 'node-m1',
        title: 'Node.js and Express',
        topics: [
          {
            id: 'node-m1-t1',
            title: 'Setting Up Express',
            explanation: 'Node.js lets you run JavaScript on the server. Express is the most popular Node.js web framework. It simplifies routing, middleware, and HTTP handling. You create a server with express(), define routes, and listen on a port.',
            examples: ['npm init -y creates a new project', 'app.get("/", handler) defines a GET route', 'app.listen(3000) starts the server'],
            codeExample: 'const express = require("express");\nconst app = express();\n\napp.use(express.json());\n\napp.get("/", (req, res) => {\n  res.json({ message: "Hello, World!" });\n});\n\napp.get("/users/:id", (req, res) => {\n  res.json({ userId: req.params.id });\n});\n\napp.listen(3000, () => {\n  console.log("Server running on port 3000");\n});',
            keyConceptsLearned: ['Express simplifies Node.js web development', 'Routes map URLs to handler functions', 'Middleware processes requests before handlers'],
            quiz: [
              { question: 'What is Express?', options: ['A database', 'A web framework for Node.js', 'A frontend library', 'A testing tool'], correctAnswer: 1, explanation: 'Express is a minimal web framework for Node.js that simplifies building APIs and web apps.' },
              { question: 'How do you access URL parameters?', options: ['req.query', 'req.params', 'req.body', 'req.url'], correctAnswer: 1, explanation: 'req.params contains URL parameters defined with :paramName in the route.' },
              { question: 'What does express.json() do?', options: ['Sends JSON responses', 'Parses JSON request bodies', 'Validates JSON', 'Formats JSON'], correctAnswer: 1, explanation: 'express.json() is middleware that parses incoming JSON request bodies.' },
            ],
          },
        ],
      },
      {
        id: 'node-m2',
        title: 'REST APIs',
        topics: [
          {
            id: 'node-m2-t1',
            title: 'Building RESTful APIs',
            explanation: 'REST (Representational State Transfer) is an architectural style for APIs. It uses HTTP methods: GET (read), POST (create), PUT (update), DELETE (remove). RESTful APIs are stateless, meaning each request contains all the information needed. Good API design uses proper status codes and consistent URL patterns.',
            examples: ['GET /api/users — list all users', 'POST /api/users — create a user', 'PUT /api/users/1 — update user with id 1'],
            codeExample: 'let users = [{ id: 1, name: "Alice" }];\n\n// GET all users\napp.get("/api/users", (req, res) => {\n  res.json(users);\n});\n\n// POST create user\napp.post("/api/users", (req, res) => {\n  const user = { id: Date.now(), ...req.body };\n  users.push(user);\n  res.status(201).json(user);\n});\n\n// DELETE user\napp.delete("/api/users/:id", (req, res) => {\n  users = users.filter(u => u.id !== parseInt(req.params.id));\n  res.status(204).send();\n});',
            keyConceptsLearned: ['REST uses HTTP methods for CRUD operations', 'APIs should be stateless', 'Use proper HTTP status codes'],
            quiz: [
              { question: 'Which HTTP method creates a resource?', options: ['GET', 'POST', 'PUT', 'DELETE'], correctAnswer: 1, explanation: 'POST is used to create new resources in REST APIs.' },
              { question: 'What status code means "Created"?', options: ['200', '201', '204', '301'], correctAnswer: 1, explanation: '201 Created indicates a new resource was successfully created.' },
              { question: 'What does stateless mean?', options: ['No database', 'Each request is independent', 'No authentication', 'No caching'], correctAnswer: 1, explanation: 'Stateless means each request contains all information needed — the server doesn\'t store session state between requests.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'database-design',
    title: 'Database Design',
    category: 'it',
    level: 'intermediate',
    description: 'Learn to design efficient databases. Cover normalization, relationships, indexing, and schema design.',
    icon: '📊',
    modules: [
      {
        id: 'dbd-m1',
        title: 'Database Fundamentals',
        topics: [
          {
            id: 'dbd-m1-t1',
            title: 'Tables and Relationships',
            explanation: 'Relational databases organize data into tables with rows and columns. Tables are related through keys: primary keys uniquely identify rows, foreign keys reference other tables. Relationships can be one-to-one, one-to-many, or many-to-many. Proper relationship design prevents data duplication and ensures data integrity.',
            examples: ['Users table with id (PK), name, email', 'Orders table with user_id (FK) referencing Users', 'Many-to-many needs a junction table'],
            codeExample: '-- Create related tables\nCREATE TABLE users (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100) NOT NULL,\n    email VARCHAR(255) UNIQUE\n);\n\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    user_id INT REFERENCES users(id),\n    total DECIMAL(10,2),\n    created_at TIMESTAMP DEFAULT NOW()\n);',
            keyConceptsLearned: ['Primary keys uniquely identify rows', 'Foreign keys create relationships between tables', 'Three types: one-to-one, one-to-many, many-to-many'],
            quiz: [
              { question: 'What does a primary key do?', options: ['Encrypts data', 'Uniquely identifies each row', 'Links tables', 'Sorts data'], correctAnswer: 1, explanation: 'A primary key uniquely identifies each row in a table.' },
              { question: 'What does a foreign key reference?', options: ['Another column', 'Another table\'s primary key', 'An index', 'A view'], correctAnswer: 1, explanation: 'A foreign key references the primary key of another table to create a relationship.' },
              { question: 'Many-to-many relationships require?', options: ['Foreign key', 'Junction table', 'View', 'Index'], correctAnswer: 1, explanation: 'Many-to-many relationships need a junction (bridge) table with foreign keys to both tables.' },
            ],
          },
        ],
      },
      {
        id: 'dbd-m2',
        title: 'Normalization',
        topics: [
          {
            id: 'dbd-m2-t1',
            title: 'Database Normalization',
            explanation: 'Normalization organizes data to reduce redundancy and improve integrity. First Normal Form (1NF) eliminates repeating groups. Second Normal Form (2NF) removes partial dependencies. Third Normal Form (3NF) removes transitive dependencies. While normalization is important, sometimes denormalization is used for performance.',
            examples: ['1NF: Each cell contains a single value', '2NF: All non-key columns depend on the entire primary key', '3NF: No non-key column depends on another non-key column'],
            codeExample: '-- Before normalization (bad)\n-- orders: id, customer_name, customer_email, product, price\n\n-- After normalization (good)\nCREATE TABLE customers (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    email VARCHAR(255)\n);\n\nCREATE TABLE products (\n    id SERIAL PRIMARY KEY,\n    name VARCHAR(100),\n    price DECIMAL(10,2)\n);\n\nCREATE TABLE orders (\n    id SERIAL PRIMARY KEY,\n    customer_id INT REFERENCES customers(id),\n    product_id INT REFERENCES products(id)\n);',
            keyConceptsLearned: ['Normalization reduces data redundancy', '1NF, 2NF, 3NF are progressive levels', 'Denormalization may be needed for performance'],
            quiz: [
              { question: 'What does 1NF require?', options: ['No null values', 'Atomic values in each cell', 'A primary key only', 'Foreign keys'], correctAnswer: 1, explanation: '1NF requires that each cell contains a single (atomic) value — no repeating groups.' },
              { question: 'Why normalize databases?', options: ['Faster queries', 'Reduce redundancy', 'More storage', 'Simpler queries'], correctAnswer: 1, explanation: 'Normalization reduces data redundancy and improves data integrity.' },
              { question: 'Is denormalization ever useful?', options: ['Never', 'Yes, for read performance', 'Only in NoSQL', 'Only for small databases'], correctAnswer: 1, explanation: 'Denormalization can improve read performance by reducing joins, at the cost of redundancy.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    category: 'it',
    level: 'advanced',
    description: 'Learn to design scalable systems. Cover architecture patterns, load balancing, caching, and microservices.',
    icon: '🏛️',
    modules: [
      {
        id: 'sd-m1',
        title: 'Scalability Fundamentals',
        topics: [
          {
            id: 'sd-m1-t1',
            title: 'Horizontal vs Vertical Scaling',
            explanation: 'Vertical scaling (scaling up) means adding more power to a single server — more CPU, RAM, or storage. Horizontal scaling (scaling out) means adding more servers. Horizontal scaling is preferred for high-availability systems because it provides redundancy. Load balancers distribute traffic across multiple servers.',
            examples: ['Vertical: upgrading from 8GB to 32GB RAM', 'Horizontal: adding 3 more servers behind a load balancer', 'Netflix uses horizontal scaling with thousands of servers'],
            keyConceptsLearned: ['Vertical = bigger server, Horizontal = more servers', 'Horizontal scaling provides better availability', 'Load balancers distribute traffic evenly'],
            quiz: [
              { question: 'Which scaling adds more servers?', options: ['Vertical', 'Horizontal', 'Diagonal', 'Linear'], correctAnswer: 1, explanation: 'Horizontal scaling adds more servers to handle increased load.' },
              { question: 'What distributes traffic across servers?', options: ['Firewall', 'Load balancer', 'DNS', 'Cache'], correctAnswer: 1, explanation: 'A load balancer distributes incoming traffic across multiple servers.' },
              { question: 'Which scaling has a hardware limit?', options: ['Horizontal', 'Vertical', 'Both', 'Neither'], correctAnswer: 1, explanation: 'Vertical scaling is limited by the maximum hardware a single machine can have.' },
            ],
          },
          {
            id: 'sd-m1-t2',
            title: 'Caching Strategies',
            explanation: 'Caching stores frequently accessed data in fast storage (like memory) to reduce database queries and improve response times. Common strategies include cache-aside (lazy loading), write-through, and write-back. Redis and Memcached are popular caching solutions. Cache invalidation — knowing when to update or remove cached data — is one of the hardest problems in computing.',
            examples: ['Redis stores session data in memory for fast access', 'CDNs cache static assets at edge locations', 'Cache-aside: check cache first, then database'],
            keyConceptsLearned: ['Caching reduces database load and improves speed', 'Cache-aside is the most common strategy', 'Cache invalidation is critical and challenging'],
            quiz: [
              { question: 'What is cache-aside strategy?', options: ['Write to cache only', 'Check cache, then DB if miss', 'Write to both simultaneously', 'Cache everything'], correctAnswer: 1, explanation: 'Cache-aside: check cache first; on miss, read from DB and update cache.' },
              { question: 'What is a popular in-memory cache?', options: ['MySQL', 'Redis', 'MongoDB', 'PostgreSQL'], correctAnswer: 1, explanation: 'Redis is a popular in-memory data store used for caching.' },
              { question: 'What is the hardest caching problem?', options: ['Speed', 'Cost', 'Invalidation', 'Storage'], correctAnswer: 2, explanation: '"There are only two hard things in CS: cache invalidation and naming things." — Phil Karlton' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'docker-devops',
    title: 'Docker & DevOps',
    category: 'it',
    level: 'advanced',
    description: 'Master containerization with Docker and DevOps practices. Learn CI/CD, orchestration, and deployment.',
    icon: '🐳',
    modules: [
      {
        id: 'docker-m1',
        title: 'Docker Basics',
        topics: [
          {
            id: 'docker-m1-t1',
            title: 'Containers and Images',
            explanation: 'Docker containers are lightweight, portable packages that include everything needed to run an application. Images are blueprints for containers — they define the OS, dependencies, code, and configuration. Containers are isolated from each other and the host system. Unlike VMs, containers share the host OS kernel, making them much faster to start.',
            examples: ['docker run nginx starts an Nginx container', 'Dockerfile defines how to build an image', 'docker ps lists running containers'],
            codeExample: '# Dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]\n\n# Build and run\n# docker build -t myapp .\n# docker run -p 3000:3000 myapp',
            keyConceptsLearned: ['Containers package apps with dependencies', 'Images are blueprints, containers are instances', 'Containers are lighter than VMs'],
            quiz: [
              { question: 'What is a Docker image?', options: ['A running process', 'A blueprint for containers', 'A virtual machine', 'A configuration file'], correctAnswer: 1, explanation: 'An image is a blueprint/template used to create containers.' },
              { question: 'How are containers different from VMs?', options: ['Containers are heavier', 'Containers share the host OS kernel', 'Containers need more RAM', 'No difference'], correctAnswer: 1, explanation: 'Containers share the host OS kernel, making them much lighter and faster than VMs.' },
              { question: 'What does Dockerfile define?', options: ['Container logs', 'How to build an image', 'Network settings', 'Volume mounts'], correctAnswer: 1, explanation: 'A Dockerfile contains instructions to build a Docker image.' },
            ],
          },
        ],
      },
      {
        id: 'docker-m2',
        title: 'CI/CD Pipelines',
        topics: [
          {
            id: 'docker-m2-t1',
            title: 'Continuous Integration & Deployment',
            explanation: 'CI/CD automates building, testing, and deploying code. Continuous Integration (CI) automatically builds and tests code on every commit. Continuous Deployment (CD) automatically deploys to production after passing tests. Tools include GitHub Actions, Jenkins, GitLab CI, and CircleCI. CI/CD reduces manual errors and speeds up delivery.',
            examples: ['Push code → tests run automatically → deploy if passed', 'GitHub Actions uses YAML workflow files', 'Stages: build → test → deploy'],
            codeExample: '# .github/workflows/deploy.yml\nname: Deploy\non:\n  push:\n    branches: [main]\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v3\n      - uses: actions/setup-node@v3\n        with:\n          node-version: 18\n      - run: npm install\n      - run: npm test\n      - run: npm run build',
            keyConceptsLearned: ['CI automatically builds and tests on every commit', 'CD automatically deploys passing builds', 'CI/CD reduces errors and speeds delivery'],
            quiz: [
              { question: 'What does CI stand for?', options: ['Code Inspection', 'Continuous Integration', 'Container Infrastructure', 'Code Integration'], correctAnswer: 1, explanation: 'CI stands for Continuous Integration — automatically building and testing on each commit.' },
              { question: 'What triggers a CI pipeline?', options: ['Manual button', 'Code commit/push', 'Server restart', 'Scheduled timer only'], correctAnswer: 1, explanation: 'CI pipelines are typically triggered by code commits or pull requests.' },
              { question: 'Which tool provides CI/CD for GitHub?', options: ['Jenkins only', 'GitHub Actions', 'Docker', 'Kubernetes'], correctAnswer: 1, explanation: 'GitHub Actions is GitHub\'s built-in CI/CD platform using YAML workflow files.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud Deployment',
    category: 'it',
    level: 'advanced',
    description: 'Deploy applications to the cloud. Learn AWS, Azure, GCP basics, serverless, and infrastructure as code.',
    icon: '☁️',
    modules: [
      {
        id: 'cloud-m1',
        title: 'Cloud Platforms',
        topics: [
          {
            id: 'cloud-m1-t1',
            title: 'Cloud Services Overview',
            explanation: 'Cloud computing provides on-demand computing resources over the internet. The three main models are IaaS (Infrastructure as a Service — virtual servers), PaaS (Platform as a Service — managed platforms), and SaaS (Software as a Service — ready-to-use apps). Major providers are AWS, Google Cloud, and Microsoft Azure. Cloud eliminates the need to manage physical hardware.',
            examples: ['AWS EC2 is IaaS — you manage the virtual server', 'Heroku/Vercel are PaaS — they manage infrastructure', 'Gmail/Slack are SaaS — fully managed applications'],
            keyConceptsLearned: ['IaaS, PaaS, SaaS are the three service models', 'AWS, GCP, Azure are the major providers', 'Cloud provides on-demand, pay-as-you-go resources'],
            quiz: [
              { question: 'What is IaaS?', options: ['Ready-to-use software', 'Virtual infrastructure', 'Managed platform', 'Database service'], correctAnswer: 1, explanation: 'IaaS provides virtual computing infrastructure — servers, storage, networking.' },
              { question: 'Which is a PaaS example?', options: ['AWS EC2', 'Vercel', 'Gmail', 'Windows'], correctAnswer: 1, explanation: 'Vercel is PaaS — it manages the infrastructure, you just deploy code.' },
              { question: 'What does "on-demand" mean in cloud?', options: ['Pre-purchased', 'Resources when you need them', 'Free forever', 'Shared only'], correctAnswer: 1, explanation: 'On-demand means you can provision resources instantly when needed and pay only for what you use.' },
            ],
          },
        ],
      },
      {
        id: 'cloud-m2',
        title: 'Serverless',
        topics: [
          {
            id: 'cloud-m2-t1',
            title: 'Serverless Functions',
            explanation: 'Serverless computing runs code without managing servers. You write functions that execute in response to events (HTTP requests, file uploads, timers). The cloud provider handles scaling, patching, and availability. You pay only for execution time. AWS Lambda, Google Cloud Functions, and Vercel Functions are popular serverless platforms.',
            examples: ['AWS Lambda runs code triggered by API Gateway', 'Functions scale automatically from 0 to thousands', 'Pay per millisecond of execution time'],
            codeExample: '// Serverless function (Vercel/Next.js style)\nexport default function handler(req, res) {\n  const { name } = req.query;\n  res.status(200).json({\n    message: `Hello, ${name || "World"}!`,\n    timestamp: new Date().toISOString()\n  });\n}\n\n// Triggered by: GET /api/hello?name=Alice',
            keyConceptsLearned: ['Serverless = no server management', 'Functions execute in response to events', 'Auto-scaling and pay-per-use pricing'],
            quiz: [
              { question: 'What triggers serverless functions?', options: ['Server startup', 'Events (HTTP, timers, etc.)', 'Manual only', 'Cron jobs only'], correctAnswer: 1, explanation: 'Serverless functions are triggered by events like HTTP requests, file uploads, or scheduled timers.' },
              { question: 'Who manages the servers in serverless?', options: ['You', 'Cloud provider', 'No one', 'DevOps team'], correctAnswer: 1, explanation: 'The cloud provider manages all server infrastructure — you just write and deploy code.' },
              { question: 'How is serverless priced?', options: ['Monthly flat rate', 'Per execution time', 'Per server', 'Free always'], correctAnswer: 1, explanation: 'Serverless pricing is based on execution time and number of invocations.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'machine-learning-basics',
    title: 'Machine Learning Basics',
    category: 'it',
    level: 'advanced',
    description: 'Introduction to machine learning. Learn supervised learning, classification, regression, and model evaluation.',
    icon: '🤖',
    modules: [
      {
        id: 'ml-m1',
        title: 'ML Fundamentals',
        topics: [
          {
            id: 'ml-m1-t1',
            title: 'What is Machine Learning?',
            explanation: 'Machine Learning is a subset of AI where computers learn patterns from data without being explicitly programmed. There are three main types: supervised learning (labeled data), unsupervised learning (unlabeled data), and reinforcement learning (learning from rewards). ML is used in recommendation systems, image recognition, natural language processing, and autonomous vehicles.',
            examples: ['Spam filters learn from labeled emails', 'Netflix recommends based on viewing patterns', 'Self-driving cars use reinforcement learning'],
            codeExample: '# Simple ML with scikit-learn\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LinearRegression\nimport numpy as np\n\n# Data\nX = np.array([[1], [2], [3], [4], [5]])\ny = np.array([2, 4, 6, 8, 10])\n\n# Train\nmodel = LinearRegression()\nmodel.fit(X, y)\n\n# Predict\nprint(model.predict([[6]]))  # [12.]',
            keyConceptsLearned: ['ML learns patterns from data', 'Supervised, unsupervised, reinforcement learning', 'Training data teaches the model'],
            quiz: [
              { question: 'What type of ML uses labeled data?', options: ['Unsupervised', 'Supervised', 'Reinforcement', 'Deep learning'], correctAnswer: 1, explanation: 'Supervised learning uses labeled data — inputs paired with known outputs.' },
              { question: 'What is a training dataset?', options: ['Test results', 'Data the model learns from', 'Production data', 'User feedback'], correctAnswer: 1, explanation: 'Training data is the labeled dataset used to teach the model patterns.' },
              { question: 'Which is a supervised learning task?', options: ['Clustering', 'Classification', 'Anomaly detection', 'Dimensionality reduction'], correctAnswer: 1, explanation: 'Classification assigns labels to inputs — a supervised learning task using labeled training data.' },
            ],
          },
          {
            id: 'ml-m1-t2',
            title: 'Model Evaluation',
            explanation: 'Evaluating ML models is critical to ensure they perform well on unseen data. Split data into training and test sets. Key metrics include accuracy, precision, recall, and F1-score. Overfitting occurs when a model performs well on training data but poorly on new data. Cross-validation provides more reliable evaluation by testing on multiple data splits.',
            examples: ['80/20 train-test split is common', 'Accuracy = correct predictions / total predictions', 'Overfitting: model memorizes instead of learning patterns'],
            codeExample: 'from sklearn.metrics import accuracy_score, classification_report\nfrom sklearn.model_selection import cross_val_score\n\n# Evaluate\ny_pred = model.predict(X_test)\nprint(f"Accuracy: {accuracy_score(y_test, y_pred):.2f}")\nprint(classification_report(y_test, y_pred))\n\n# Cross-validation\nscores = cross_val_score(model, X, y, cv=5)\nprint(f"CV Score: {scores.mean():.2f} ± {scores.std():.2f}")',
            keyConceptsLearned: ['Split data into train/test sets', 'Accuracy, precision, recall are key metrics', 'Overfitting = good on training, bad on new data'],
            quiz: [
              { question: 'What is overfitting?', options: ['Model is too simple', 'Model memorizes training data', 'Model is too slow', 'Model has bugs'], correctAnswer: 1, explanation: 'Overfitting means the model memorizes training data but fails to generalize to new data.' },
              { question: 'What does cross-validation do?', options: ['Trains faster', 'Tests on multiple data splits', 'Removes outliers', 'Selects features'], correctAnswer: 1, explanation: 'Cross-validation evaluates the model on multiple train-test splits for reliable assessment.' },
              { question: 'What is accuracy?', options: ['Training speed', 'Correct predictions / total predictions', 'Model size', 'Data quality'], correctAnswer: 1, explanation: 'Accuracy = number of correct predictions divided by total predictions.' },
            ],
          },
        ],
      },
    ],
  },
];
