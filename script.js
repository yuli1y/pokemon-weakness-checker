const API_ROOT = "https://pokeapi.co/api/v2";

const typeLabels = {
  normal: "ノーマル",
  fire: "ほのお",
  water: "みず",
  electric: "でんき",
  grass: "くさ",
  ice: "こおり",
  fighting: "かくとう",
  poison: "どく",
  ground: "じめん",
  flying: "ひこう",
  psychic: "エスパー",
  bug: "むし",
  rock: "いわ",
  ghost: "ゴースト",
  dragon: "ドラゴン",
  dark: "あく",
  steel: "はがね",
  fairy: "フェアリー",
};

const japaneseNameMap = {
  "フシギダネ": "bulbasaur",
  "フシギソウ": "ivysaur",
  "フシギバナ": "venusaur",
  "ヒトカゲ": "charmander",
  "リザード": "charmeleon",
  "リザードン": "charizard",
  "ゼニガメ": "squirtle",
  "カメール": "wartortle",
  "カメックス": "blastoise",
  "キャタピー": "caterpie",
  "トランセル": "metapod",
  "バタフリー": "butterfree",
  "ビードル": "weedle",
  "コクーン": "kakuna",
  "スピアー": "beedrill",
  "ポッポ": "pidgey",
  "ピジョン": "pidgeotto",
  "ピジョット": "pidgeot",
  "コラッタ": "rattata",
  "ラッタ": "raticate",
  "オニスズメ": "spearow",
  "オニドリル": "fearow",
  "アーボ": "ekans",
  "アーボック": "arbok",
  "ピカチュウ": "pikachu",
  "ライチュウ": "raichu",
  "サンド": "sandshrew",
  "サンドパン": "sandslash",
  "ニドラン♀": "nidoran-f",
  "ニドリーナ": "nidorina",
  "ニドクイン": "nidoqueen",
  "ニドラン♂": "nidoran-m",
  "ニドリーノ": "nidorino",
  "ニドキング": "nidoking",
  "ピッピ": "clefairy",
  "ピクシー": "clefable",
  "ロコン": "vulpix",
  "キュウコン": "ninetales",
  "プリン": "jigglypuff",
  "プクリン": "wigglytuff",
  "ズバット": "zubat",
  "ゴルバット": "golbat",
  "ナゾノクサ": "oddish",
  "クサイハナ": "gloom",
  "ラフレシア": "vileplume",
  "パラス": "paras",
  "パラセクト": "parasect",
  "コンパン": "venonat",
  "モルフォン": "venomoth",
  "ディグダ": "diglett",
  "ダグトリオ": "dugtrio",
  "ニャース": "meowth",
  "ペルシアン": "persian",
  "コダック": "psyduck",
  "ゴルダック": "golduck",
  "マンキー": "mankey",
  "オコリザル": "primeape",
  "ガーディ": "growlithe",
  "ウインディ": "arcanine",
  "ニョロモ": "poliwag",
  "ニョロゾ": "poliwhirl",
  "ニョロボン": "poliwrath",
  "ケーシィ": "abra",
  "ユンゲラー": "kadabra",
  "フーディン": "alakazam",
  "ワンリキー": "machop",
  "ゴーリキー": "machoke",
  "カイリキー": "machamp",
  "マダツボミ": "bellsprout",
  "ウツドン": "weepinbell",
  "ウツボット": "victreebel",
  "メノクラゲ": "tentacool",
  "ドククラゲ": "tentacruel",
  "イシツブテ": "geodude",
  "ゴローン": "graveler",
  "ゴローニャ": "golem",
  "ポニータ": "ponyta",
  "ギャロップ": "rapidash",
  "ヤドン": "slowpoke",
  "ヤドラン": "slowbro",
  "コイル": "magnemite",
  "レアコイル": "magneton",
  "カモネギ": "farfetchd",
  "ドードー": "doduo",
  "ドードリオ": "dodrio",
  "パウワウ": "seel",
  "ジュゴン": "dewgong",
  "ベトベター": "grimer",
  "ベトベトン": "muk",
  "シェルダー": "shellder",
  "パルシェン": "cloyster",
  "ゴース": "gastly",
  "ゴースト": "haunter",
  "ゲンガー": "gengar",
  "イワーク": "onix",
  "スリープ": "drowzee",
  "スリーパー": "hypno",
  "クラブ": "krabby",
  "キングラー": "kingler",
  "ビリリダマ": "voltorb",
  "マルマイン": "electrode",
  "タマタマ": "exeggcute",
  "ナッシー": "exeggutor",
  "カラカラ": "cubone",
  "ガラガラ": "marowak",
  "サワムラー": "hitmonlee",
  "エビワラー": "hitmonchan",
  "ベロリンガ": "lickitung",
  "ドガース": "koffing",
  "マタドガス": "weezing",
  "サイホーン": "rhyhorn",
  "サイドン": "rhydon",
  "ラッキー": "chansey",
  "モンジャラ": "tangela",
  "ガルーラ": "kangaskhan",
  "タッツー": "horsea",
  "シードラ": "seadra",
  "トサキント": "goldeen",
  "アズマオウ": "seaking",
  "ヒトデマン": "staryu",
  "スターミー": "starmie",
  "バリヤード": "mr-mime",
  "ストライク": "scyther",
  "ルージュラ": "jynx",
  "エレブー": "electabuzz",
  "ブーバー": "magmar",
  "カイロス": "pinsir",
  "ケンタロス": "tauros",
  "コイキング": "magikarp",
  "ギャラドス": "gyarados",
  "ラプラス": "lapras",
  "メタモン": "ditto",
  "イーブイ": "eevee",
  "シャワーズ": "vaporeon",
  "サンダース": "jolteon",
  "ブースター": "flareon",
  "ポリゴン": "porygon",
  "オムナイト": "omanyte",
  "オムスター": "omastar",
  "カブト": "kabuto",
  "カブトプス": "kabutops",
  "プテラ": "aerodactyl",
  "カビゴン": "snorlax",
  "フリーザー": "articuno",
  "サンダー": "zapdos",
  "ファイヤー": "moltres",
  "ミニリュウ": "dratini",
  "ハクリュー": "dragonair",
  "カイリュー": "dragonite",
  "ミュウツー": "mewtwo",
  "ミュウ": "mew",
  "ルカリオ": "lucario",
  "ゲッコウガ": "greninja",
  "ニンフィア": "sylveon",
  "ミミッキュ": "mimikyu-disguised",
  "ザシアン": "zacian",
  "コライドン": "koraidon",
  "ミライドン": "miraidon",
};

const form = document.querySelector("#searchForm");
const input = document.querySelector("#pokemonInput");
const statusText = document.querySelector("#statusText");
const emptyState = document.querySelector("#emptyState");
const pokemonCard = document.querySelector("#pokemonCard");
const pokemonSprite = document.querySelector("#pokemonSprite");
const dexNumber = document.querySelector("#dexNumber");
const pokemonName = document.querySelector("#pokemonName");
const typeList = document.querySelector("#typeList");
const weaknessList = document.querySelector("#weaknessList");
const resistanceList = document.querySelector("#resistanceList");
const immuneList = document.querySelector("#immuneList");
const submitButton = form.querySelector("button");

const typeCache = new Map();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await searchPokemon(input.value);
});

document.querySelectorAll("[data-sample]").forEach((button) => {
  button.addEventListener("click", async () => {
    input.value = button.dataset.sample;
    await searchPokemon(input.value);
  });
});

async function searchPokemon(rawKeyword) {
  const keyword = normalizeKeyword(rawKeyword);

  if (!keyword) {
    setStatus("ポケモン名を入力してください。");
    return;
  }

  setLoading(true);
  setStatus("検索しています...");

  try {
    const pokemon = await fetchJson(`${API_ROOT}/pokemon/${keyword}`);
    const species = await fetchJson(pokemon.species.url);
    const typeNames = pokemon.types
      .sort((a, b) => a.slot - b.slot)
      .map((entry) => entry.type.name);
    const matchup = await calculateMatchup(typeNames);

    renderPokemon(pokemon, species, typeNames, matchup);
    setStatus("");
  } catch (error) {
    console.error(error);
    pokemonCard.classList.add("hidden");
    emptyState.classList.remove("hidden");
    setStatus("見つかりませんでした。英語名、図鑑番号、またはサンプル名で試してください。");
  } finally {
    setLoading(false);
  }
}

function normalizeKeyword(value) {
  const trimmed = value.trim();
  const mapped = japaneseNameMap[trimmed];

  if (mapped) {
    return mapped;
  }

  return trimmed
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/\s+/g, "-")
    .replace(/[♀]/g, "-f")
    .replace(/[♂]/g, "-m");
}

async function calculateMatchup(typeNames) {
  const multipliers = Object.fromEntries(
    Object.keys(typeLabels).map((typeName) => [typeName, 1])
  );

  const typeDetails = await Promise.all(typeNames.map(fetchType));

  typeDetails.forEach((typeDetail) => {
    typeDetail.damage_relations.double_damage_from.forEach(({ name }) => {
      multipliers[name] *= 2;
    });
    typeDetail.damage_relations.half_damage_from.forEach(({ name }) => {
      multipliers[name] *= 0.5;
    });
    typeDetail.damage_relations.no_damage_from.forEach(({ name }) => {
      multipliers[name] *= 0;
    });
  });

  return {
    weakness: pickTypes(multipliers, (value) => value > 1),
    resistance: pickTypes(multipliers, (value) => value > 0 && value < 1),
    immune: pickTypes(multipliers, (value) => value === 0),
  };
}

async function fetchType(typeName) {
  if (!typeCache.has(typeName)) {
    typeCache.set(typeName, fetchJson(`${API_ROOT}/type/${typeName}`));
  }

  return typeCache.get(typeName);
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

function renderPokemon(pokemon, species, typeNames, matchup) {
  const japaneseName = species.names.find((name) =>
    ["ja", "ja-Hrkt"].includes(name.language.name)
  );
  const displayName = japaneseName?.name ?? capitalize(pokemon.name);
  const sprite =
    pokemon.sprites.other["official-artwork"].front_default ??
    pokemon.sprites.front_default ??
    "";

  emptyState.classList.add("hidden");
  pokemonCard.classList.remove("hidden");
  pokemonSprite.src = sprite;
  pokemonSprite.alt = `${displayName}の画像`;
  dexNumber.textContent = `No. ${String(pokemon.id).padStart(4, "0")}`;
  pokemonName.textContent = displayName;

  renderTypeChips(typeList, typeNames);
  renderTypeChips(weaknessList, matchup.weakness, "弱点なし");
  renderTypeChips(resistanceList, matchup.resistance, "耐性なし");
  renderTypeChips(immuneList, matchup.immune, "無効なし");
}

function renderTypeChips(container, typeNames, emptyLabel = "") {
  container.replaceChildren();

  if (typeNames.length === 0 && emptyLabel) {
    const emptyChip = document.createElement("span");
    emptyChip.className = "type-pill none";
    emptyChip.textContent = emptyLabel;
    container.append(emptyChip);
    return;
  }

  typeNames.forEach((typeName) => {
    const chip = document.createElement("span");
    chip.className = `type-pill ${typeName}`;
    chip.textContent = typeLabels[typeName] ?? typeName;
    container.append(chip);
  });
}

function pickTypes(multipliers, predicate) {
  return Object.entries(multipliers)
    .filter(([, value]) => predicate(value))
    .sort((a, b) => b[1] - a[1] || typeLabels[a[0]].localeCompare(typeLabels[b[0]], "ja"))
    .map(([typeName]) => typeName);
}

function setStatus(message) {
  statusText.textContent = message;
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  input.disabled = isLoading;
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
}
