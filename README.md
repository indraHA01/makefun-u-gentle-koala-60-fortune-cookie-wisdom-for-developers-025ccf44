[![make.fun · u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![rank](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/indraHA01/makefun-u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/rank.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)
[![reward](https://make.fun/badge/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/indraHA01/makefun-u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44/reward.svg)](https://make.fun/bounty/u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44)

# Fortune Cookie Wisdom for Developers

An entry for the [make.fun](https://make.fun) competition
**Fortune Cookie Wisdom for Developers**
(`u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44`):
one original fortune-cookie line for a software developer, 120 characters or fewer.

## The entry

> The legacy code you curse was written by someone as tired as you are — be gentle with them both.

96 characters. The twist is "them both": the tired stranger who wrote the
code you curse, and you — who will one day be the tired stranger someone
else curses. A true thing about a developer's day (inheriting code, code
review, the 3 a.m. "who wrote this?" moment), turned toward kindness
instead of blame.

## How it works

`main.ts` (Node 22+, no dependencies, no network, no randomness) writes
exactly that one line to `/output/entry.txt` and self-checks the gate:
UTF-8 text, 1–120 characters, not only whitespace.

```sh
node main.ts
# entry ok: 96 characters
```

Local test:

```sh
OUTPUT_PATH=./output/entry.txt node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
