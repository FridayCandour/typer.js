const typer = {
	sequential: true,
	config(errorsOrLogs){
		this.sequential = errorsOrLogs;
	}
}

function lit(type, label) {
	label = typeof label === "number" ? `line ${label}` : label;
	let S_arrays = ["string"];
	let N_arrays = ["number"];
	let O_arrays = ["object"];
	let A_arrays = ["array"];
	let F_arrays = ["function"];

	return function (value) {
	if (Array.isArray(type) && Array.isArray(value)) {
		// typing for arrays
		value = value.sort();
		type = type.sort();
      for (let i = 0; i < type.length; i++) {
	 	   if (typeof value[i] === type[i] || value[i] === type[i]) {
			continue;
    	 } else {
		
		  if (typer.sequential) {
			  console.warn(`WARNING:-: type ${value} is not assignable to type ${type} at ${label}`)
			  break;
			} else {
				console.log("Typer:-: Done checking")
			throw new Error(`TYPER:-: type ${value} is not assignable to type ${type} at ${label}`)
	}
		};
  }
} else {
		// checking for objects
		for (const k in type) {
		if (typeof value[k] === type[k] || value[k] === type[k]) {
			continue;
		} else {
	      if (typer.sequential) {
			  console.warn(`WARNING:-: the object types for type and value are not assignable at ${label}`)
			  break;
			} else {
				console.log("Typer:-: Done checking")
			throw new Error(`TYPER:-: the object types for type and value are not assignable at ${label}`)
	     }
	    }
	  }
	}	
  }
}

// single values not objects
const t = function (...args) {
	let label = args.pop();
	label = typeof label === "number" ? `line ${label}` : label;
	const type = args.length === 1 ? args.pop() : args;
	return function (value) {
		if (!Array.isArray(type)) {
			// for single types
    	if(value === type || typeof value === type){
			return value;
		} else {
			if (typer.sequential) {
				console.warn(`WARNING:-: type ${typeof value} is not assignable to type ${type} at ${label}`)
			} else {
				console.log("Typer:-: Done checking")
			throw new Error(`TYPER:-: type ${typeof value} is not assignable to type ${type} at ${label}`)
	}
  }
 } else {
	// for union types
 for (let i = 0; i < type.length; i++) {
     const typ = type[i];
	 if (typeof value === typ || value === typ) {
		return value;
	} else {
	  if (i === type.length - 1) {
		if (typer.sequential) {
			console.warn(`warning type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
		} else {
			console.log("Typer:-: Done checking")
		throw new Error(`TYPER:-: type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
      }  
     }
    }
   }
  }
 }
}

<<<<<<< HEAD
export default t;
console.log("Typer:-: Done checking");
=======
// const args = function (...params){
// 	const params = params;
//      return function (label){
// 	for(let i = 0; i < params.lenght; i+2)
	     
//     	if(value === type || typeof value === type){
// 			return value;
// 		} else {
// 			if (typer.logs) {
// 				console.log(`warning type ${typeof value} is not assignable to type ${type} at ${label}`)
//     	} else {
// 			throw new Error(`TYPER:-: type ${typeof value} is not assignable to type ${type} at ${label}`)
// 	}
//   }
//  } else {
// 	// for union types
//  for (let i = 0; i < type.length; i++) {
//      const typ = type[i];
// 	 if (typeof value === typ || value === typ) {
// 		return value;
// 	} else {
// 	  if (i === type.length - 1) {
// 		if (typer.logs) {
// 			console.log(`warning type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
//      } else {
// 		throw new Error(`TYPER:-: type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
//       }  
//      }
//     }
//    }
//   }
//  }
// }

// 	}
// }
const typer = {
	logs: false,
	config(errorsOrLogs){
		this.logs = errorsOrLogs;
	}
}
// typer.config(true)
const a = t("string", "line 1")("typer");
const b = t("number", "line 2")(5);
const c = t("string",  "number", "line 3")("typer is 5 letters");
// console.log(a + " | ",b + " | ",c + " | ");
const type = {
	a: "number",
	b: "string"
}
function ell(egg = t("egg", "label")(egg)) {
	egg = t(type, "ell")(egg)
	// console.log(egg);
}
//ell(type)
>>>>>>> 1d3cb14096ffe2deabea74c008c6ea4fb1708596
