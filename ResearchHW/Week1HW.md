# line 32, why can we only use tax[913] instead of dot notation aka tax.913

Dot notation cannot be used to access object properties that start with a
number because those property names are not valid Javascript identifiers 
when using Dot notation. Dot notation only works with keys that follow 
variable naming conventions (such as starting with a letter, underscore,
or dollar sign), while property names that start with numbers or contain
spaces or special characters need to be accessed with bracket notation. 
Bracket notation allows for any string as a key. 

Other instances when dot notation does not work include: 

