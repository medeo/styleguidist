## Select with search
```jsx
const options = [
    'Chocolate', 
    'Banana', 
    'Coconut', 
    'Strawberry', 
    'Mint', 
    'Bacon', 
    'Mango'
];

    <FuzzySearch 
        list="ice-cream-flavours" 
        id="ice-cream-choice" 
        placeholder="Choose your ice cream">
        {options.map((option, index) => (
            <option value={option} key={index} />
        ))}
    </FuzzySearch>
```
