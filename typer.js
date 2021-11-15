const t = function (...args) {
const label = args.pop();
	const type = args.length === 1? args.pop(): args;
	return function (value) {
		if (!Array.isArray(type)) {
			// for single types
    	if(value === type || typeof value === type){
			return value;
		} else {
			if (typer.logs) {
				console.log(`warning type ${typeof value} is not assignable to type ${type} at ${label}`)
    	} else {
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
		if (typer.logs) {
			console.log(`warning type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
     } else {
		throw new Error(`TYPER:-: type ${typeof value} is not assignable to types ${type[0]}, ${type[1]}...  at ${label}`)
      }  
     }
    }
   }
  }
 }
}

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
ell(type)
