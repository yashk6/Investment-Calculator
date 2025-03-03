 export default function UserInput({ onChange, userInput }) {
 return (
 <section id="user-input">
        <div className="input-group">
            <p> 
                <label>Initial Investment</label>
                <input 
                type="number"
                 required 
                 value={UserInput.initialInvestment}
                 onChange={(event) => 
                    onChange('initialInvestment', event.target.value)
                } 
                 />
            </p>
            <p> 
                <label>Annual Investment</label>
                <input 
                type="number" 
                required 
                value={UserInput.annualInvestment}
                 onChange={(event) => 
                    onChange('annualInvestment', event.target.value)
                    } 
                    />
            </p>
        </div>
        <div className="input-group">
            <p> 
                <label>Expected Return</label>
                <input 
                type="number" 
                required 
                value={UserInput.expecedReturn}
                 onChange={(event) => 
                    onChange('expecedReturn', event.target.value)
                    } 
                     />
            </p>
            <p> 
                <label>Duration</label>
                <input 
                type="number" 
                required 
                value={UserInput.duration}
                 onChange={(event) => 
                    onChange('duration', event.target.value)
                    } 
                     />
            </p>
        </div>
</section>
);
}