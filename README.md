# AutoComplete React TypeScript Project

This is a simple auto-complete component built with React and TypeScript. It allows users to type in a search query, and it provides suggestions based on a provided data source. The matching part of the text is highlighted, and users can select an option from the dropdown.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/stefankuburovic/autocomplete-react-typescript.git

- ####  Navigate to the project directory:

 ```bash
cd autocomplete-react-typescript
```
- #### Install project dependencies:

```bash
npm install
```
#### Running the Project
To start the development server and run the project locally, use the following command:

```bash
npm start
```
This will launch the application in your default web browser at http://localhost:3000. You can now use the auto-complete feature to search for items.

#### Usage
- Start typing in the input field, and the auto-complete suggestions will appear as you type.
- Click on a suggestion to select it, and the selected item will be displayed in the input field.
- The matching part of the text in the suggestions is highlighted.


Certainly! Here's a sample README.md file that explains how to run the project and provides additional information:

markdown
Copy code
# AutoComplete React TypeScript Project

This is a simple auto-complete component built with React and TypeScript. It allows users to type in a search query, and it provides suggestions based on a provided data source. The matching part of the text is highlighted, and users can select an option from the dropdown.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/autocomplete-react-typescript.git
Navigate to the project directory:

```bash
cd autocomplete-react-typescript
```

#### Install project dependencies:
```bash
npm install
```

#### Running the Project
To start the development server and run the project locally, use the following command:

```bash
npm start
```
This will launch the application in your default web browser at http://localhost:3000. You can now use the auto-complete feature to search for items.

#### Usage
- Start typing in the input field, and the auto-complete suggestions will appear as you type.
- Click on a suggestion to select it, and the selected item will be displayed in the input field.
- The matching part of the text in the suggestions is highlighted.

#### Customization
You can customize the project by modifying the `data.json` file to provide your own data source. Additionally, you can update the CSS styles in the `App.css` file to match your design preferences.
#### Running Tests

You can run tests for this project to ensure that it functions correctly. We use the `@testing-library/react` library for testing.
```bash
npm test
```
Writing Tests
If you want to write additional tests or modify existing ones, you can find the test files in the src directory. For example, you can add or modify test cases in `src/App.test.tsx`.

### Real API Data
If you want to load data from a real API, you can replace the data fetching logic in the `AutoComplete.tsx` uncomment code from line `25 - 35` in `AutoComplete.tsx` and comment `38 - 52`