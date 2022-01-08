// DESCRIPTION:
// Prove that the end (last element) of a list does not change, even if we append another list in front. Specifically, your task is to prove the following:

{-# OPTIONS --safe #-}
module InevitableEnd where

open import Relation.Binary.PropositionalEquality
open import Data.List
open import Preloaded

data NonEmpty {A : Set} : List A → Set where
  _∷_ : (x : A) → (xs : List A) → NonEmpty (x ∷ xs)

non-empty : ∀ {A : Set} {xs : List A} → xs ≢ [] → NonEmpty xs
non-empty {xs = []} xs≢[] with xs≢[] refl
... | ()
non-empty {xs = x ∷ xs} _ = x ∷ xs

inevitable-end : ∀ {A : Set} (ys xs : List A) → xs ≢ [] → last (ys ++ xs) ≡ last xs
inevitable-end (_ ∷ y ∷ ys) _ xs≢[] = inevitable-end (y ∷ ys) _ xs≢[]
inevitable-end (y ∷ [])     _ xs≢[] with non-empty xs≢[]
... | _ ∷ _ = refl
inevitable-end []           _ _     = refl

// alternative solution

{-# OPTIONS --safe #-}
module InevitableEnd where

open import Relation.Binary.PropositionalEquality
open import Data.List
open import Data.Empty
open import Preloaded

lemma : {A : Set} → ∀ (x : A) (xs : List A) → xs ≢ [] → last (x ∷ xs) ≡ last xs
lemma x [] neq = ⊥-elim (neq refl)
lemma x (x₁ ∷ xs) neq = refl

append-not-nil : {a : Set} (ys xs : List a) → xs ≢ [] → ys ++ xs ≢ []
append-not-nil [] xs neq = neq
append-not-nil (x ∷ xs₁) xs neq = λ ()

inevitable-end : {a : Set} (ys xs : List a) → xs ≢ [] → last (ys ++ xs) ≡ last xs
inevitable-end [] xs neq = refl
inevitable-end (x ∷ ys) xs neq = trans (lemma x (ys ++ xs) (append-not-nil ys xs neq)) (inevitable-end ys xs neq)