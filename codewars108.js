// Build a function counter which will count how many times it receives True before finally receiving False. When it receives False, it should output the resulting count as a Church numeral.

// Note: Purity is set to Let, so you must provide your own recursion!

// Encodings
// Numbers: Church
// Purity: Let

// Preloaded

// True = \ a _ . a
// False = \ _ b . b
rec = \ f. (\ x. f (x x)) (\ x. f (x x))
succ = \ n f x. f (n f x)
counterN = \ f n b. b (\ b. f (succ n) b) n
counter = rec counterN 0

// alternative solution
succ = \ n f x . f (n f x)
fix = \ f . (\ x . f (x x)) (\ x . f (x x))
go = fix (\ go n continue . continue (go (succ n)) n)
counter = go 0

// alternative solution
succ = \ n f x . f (n f x)

M = \ f . f f
Y = \ f . M (\ x . f (x x))

go = Y (\ g n b . b (g (succ n)) n)

counter = go 0

// alternative solution

zero = \ a b . b
succ = \ n f x . f (n f x)

y = \ f . (\ x . f (x x)) (\ x . f (x x))

counter = y (\ count n b . b (count (succ n)) n) zero