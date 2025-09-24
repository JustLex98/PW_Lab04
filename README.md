Analicemos ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

Respuesta: 
JavaScript permite estas operaciones porque sigue un conjunto de reglas estándar llamado precedencia de operadores, 
que dicta el orden de ejecución para garantizar resultados predecibles.

Paréntesis (): Tienen la máxima prioridad. Por eso (3 + 7) se resuelve primero.
Multiplicación * vs. Suma +: La multiplicación tiene mayor precedencia, por lo que 7 * 10 se calcula antes que la suma.
Exponenciación **: Se evalúa de derecha a izquierda. En 2 ** 3 ** 2, primero se calcula 3 ** 2 (que es 9) y luego 2 ** 9.
Incremento/Decremento ++ --: Su comportamiento depende de si están antes (pre) o después (post) de la variable, afectando qué valor se usa en la asignación.
Asignación +=: Tienen baja prioridad y se ejecutan al final.


Analicemos ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Respuesta:
Sí, el comportamiento es fundamentalmente el mismo.
Las estructuras if/else, switch, for y while son conceptos básicos y universales en la mayoría de los lenguajes de programación (Java, C++, Python, etc.).
La lógica para la toma de decisiones y la repetición es idéntica. Las únicas diferencias suelen ser menores y se limitan a la sintaxis del lenguaje, 
como el uso de llaves {} en JavaScript en comparación con la indentación en Python.
