# Relations

A relation is a structure that is used to represent the relationships between elements

## Category of relations
- Binary relations
- N-ary relations

## Binary Relations
A binary relation $R$ from the set $A$ to the set $B$ is a subset of $A \times B$.

$R$ is a set of ordered pairs in the form $(a, b)$ where $a$ is from $A$ and $b$ is from $B$.

$a R b$ denotes $(a, b) \in R$, called $a$ is related to $b$ by $R$.

## Functions and Relations
- Are all the functions relations? Yes
- Are all relations functions? No

## Relation on the Set
- A relation on the set is a relation from $A$ to $A$.

## Properties of Relations
### Reflexive
A relation $R$ on a set $A$ is called reflexive if $(a, a) \in R$ for every element $a \in A$.

### Symmetric
A relation $R$ on a set $A$ is called symmetric if $(b, a) \in R$ whenever $(a, b) \in R$.

### Anti-symmetric
A relation $R$ on a set $A$ is called anti-symmetric if whenever $(a, b) \in R$ and $(b, a) \in R$, then $a = b$.

### Transitive
A relation $R$ on a set $A$ is called transitive if whenever 
$(a, b) \in R$ and $(b, c) \in R$, then $(a, c) \in R$.

## Combining Relations 
The composite of $R$ and $S$ ($S \circ R$): consisting of all ordered pairs $(a, c)$ where $a \in A$, and $c \in C$ if there exists $b$ such that $(a, b) \in R$ and $(b, c) \in S$.
>E.g.,  
▪ $A = \{1\}$, $B = \{0, 1\}$, $C = \{2, 3\}$   
▪ $R = \{(1, 0), (1, 1)\}$ (a relation from $A$ to $B$)  
▪ $S = \{(0, 2), (1, 3)\}$ (a relation from $B$ to $C$)  
▪ $S \circ R = \{(1, 2), (1, 3)\}$  
>

## Powers of a Relation
Let $R$ be a relation on the set $A$. The powers $R^n$ for integer $n$ with $n > 0$ are defined recursively by 
$R^1 = R$  
$R^{n}=R^{n-1} \circ R$   

Theorem: The relation $R$ on a set $A$ is transitive if and only if $R^n \subseteq R$ for $n = 1, 2, 3, \ldots$

## $n$-ary Relations
- Let $A_1, A_2, \ldots, A_n$ be sets.
- An $n$-ary relation on these sets is a subset of $A_1 \times A_2 \times \ldots \times A_n$
- Domain: $A_1 \times A_2 \times \ldots \times A_n$
- Degree: $n$

## Relations and Database
- Currently, the most commonly used databases are relational databases.
- Each database consists of multiple relations.
- Each relation is presented as a table.

## Operations on $n$-ary Relations
### Selection operator $\sigma$:
- $n$-ary relation $R$
- condition $c$
- Selection operator $\sigma_c$: maps $R$ to an $n$-ary relations $T$, where all the tuples in $T$ satisfy the condition $c$.  
i.e. $\sigma_{\text{major}}=\text{"Computer Science"} \text{ GradeReport} = \{(John,001,\text{Computer Science}, 3.5)\}$

### Projection operator $\pi$:
- the input relation is on $n$ tuples $(a_1, a_2, \ldots , a_n)$ ,
- the output relation is on $m$ tuples $(a_{i_1},a_{i_2}, \ldots , a_{i_m})$, $m < n$.
- Projection operator $\pi_{i_1,i_2,\ldots,i_m}$: removes the tuples not in the $m$-tuple $(a_{i_1}a_{i_2}, \ldots , a_{i_m})$ list
i.e. $\pi_{\text{name},\text{GPA}} (\text{GradeReport}) = \{(John, 3.5 ),( Tony, 3.2 ),( Jonas, 3.3)\}$

## Equivalence Relations
- A relation on a set $A$ is called an equivalence relation if it is reflexive, symmetric, and transitive.
Let $R$ be an equivalence relation on $A$.
### Equivalent class
Equivalent class -> Equivalent relations
###  Partition
- All the equivalent classes obtained from $A$ through an equivalent class are either same or disjoint. 
- These disjoint classes are subsets of $A$.
- The union of these subsets is $A$.
- These subsets are called a partition of $A$
In general, $(A_1, A_2, \ldots , A_n)$ is a partition of $A$ if:
1. $A_i \neq \emptyset$ for all $1 \leq i \leq n$
2. $A_i \cap A_j = \emptyset$ for all $1 \leq i,j \leq n$
3. $A_1 \cup A_2 \cup \ldots \cup A_n = A$
### Theorem: Let $R$ be an equivalence relation on a nonempty set $A$. 
The following statements are equivalent:
- $a R b$
- $[a] = [b]$
- $a \cap [b] \neq \emptyset$
