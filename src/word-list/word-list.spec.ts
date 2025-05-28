import { expect, test, describe } from 'vitest';
import { toList, wordListTrie, slice, startsWith } from '.';

import wordList from './word-list.json' assert { type: 'json' };


const { words } = wordList;

describe('word-list', () => {

    describe('toList', () => {
        describe('word-list', () => {

            describe('toList', () => {
                const trieList = toList(wordListTrie);

                test('length', () => {
                    expect(trieList.length).toBe(1 << 11);
                });

                test('all words', () => {
                    expect(trieList).toEqual(words);
                });
            });

            describe('slice', () => {
                test('slice valid range', () => {
                    expect(toList(slice(1, 2))).toEqual(words.slice(1, 2));
                });

                test('slice valid range', () => {
                    const pairsPerPage = 1 << 7;
                      expect(toList(slice(0, 16 * pairsPerPage))).toEqual(words);
                });

                test('slice valid range 2', () => {
                    const pairsPerPage = 1 << 7;
                    const start = 15 * pairsPerPage -  3;
                    const end = start + pairsPerPage;
                    expect(toList(slice(start, end))).toEqual(words.slice(start, end));
                });

                test('slice invalid range (negative start)', () => {
                    expect(() => slice(-1, 2)).toThrow('Invalid range');
                });

                test('slice invalid range (end < start)', () => {
                    expect(() => slice( 3, 2)).toThrow('Invalid range');
                });

                test('slice invalid range (end > count)', () => {
                    expect(() => slice(0, words.length + 1)).toThrow('Invalid range');
                });
            });

            describe('startsWith', () => {
                test('startsWith valid prefix', () => {
                    const prefix = 'act';
                    const sub = startsWith(prefix);
                    expect(sub).toBeTruthy();
                    if (sub) {
                        expect(toList(sub)).toEqual(words.filter(w => w.startsWith(prefix)));
                    }
                });

                test('startsWith invalid prefix', () => {
                    const prefix = 'xyz';
                    const sub = startsWith(prefix);
                    expect(sub).toBeUndefined();
                });

                test('startsWith empty prefix', () => {
                    const prefix = '';
                    const sub = startsWith(prefix);
                    expect(sub).toBeTruthy();
                    if (sub) {
                        expect(toList(sub)).toEqual(words);
                    }
                });
            });
        });
    });
});
