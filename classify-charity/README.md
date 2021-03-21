# CharityBase Data: Topic Modelling

This script uses a Java based topic modelling software to automatically generate
charitable themes based on groups of words which commonly co-occur i.e. words
which often appear near each other in the textual data we have for each charity.

As well as defining the themes, this script also calculates scores of how
relevant each theme is to each charity, and persists this information to the
database. This is useful for classifying charities by theme.

For more background on topic modelling:
[https://en.wikipedia.org/wiki/Topic_model](https://en.wikipedia.org/wiki/Topic_model)

### Requirements

- [Java](https://www.java.com)
- [MALLET](http://mallet.cs.umass.edu)
- [MySQL v8+](https://www.mysql.com)
- [Node v10+](https://nodejs.org)
- [Yarn](https://yarnpkg.com)

Before running this script the database must be initiated and all the data from
the Charity Commission and 360 Giving imported (see the [other directories](../)
in this repository for instruction). Much of the imported textual data is used
as input in this topic model.

### Installing

```bash
yarn
cp .env-example .env
```

### Classifying Charities

First, update the variables in `.env`.

#### Whole Process

```bash
yarn classify # Estimated runtime: 34 minutes
```

#### Sub Processes

Instead of the above you may prefer to run the process step-by-step:

##### Generating Input Text for Classification

```bash
yarn classify:generate-input # Estimated runtime: 1 minute
```

##### Generating Topics using Latent Dirichlet Allocation (LDA)

```bash
yarn classify:generate-topic # Estimated runtime: 3 minutes
```

##### Inserting Topics and Scores

```bash
yarn classify:insert-topic # Estimated runtime: 30 minutes
```

### Example of Generated Topics

```
0   0.17857 sport sports revenue covid lists football multi focus participation club building cef playing younger recreation csp emergency coaching cricket active
1   0.17857 club raising include coffee clubs parties fundraising classes nights raise outings held hire sales mornings evening night quiz craft evenings
2   0.17857 food homeless covid vulnerable accommodation housing families poverty emergency homelessness response bank foodbank crisis street meals furniture essential hope low
3   0.17857 disabilities learning carers disabled adults disability families special skills difficulties autism family physical respite sensory sessions communication residential inclusive covid
4   0.17857 women classes cultural language health english skills ethnic workshops culture minority courses black asian awareness sessions bme tower chinese hamlets
5   0.17857 core research foundation voluntary action change network policy impact sustainable building future build resources business unrestricted ensure create knowledge quality
6   0.17857 hospital research patients medical families hospice treatment awareness information health disease raise affected brain requested donor nhs hospitals carers illness
7   0.17857 foundation farm garden applications land limited growing received gardening meet requests individual receive employees specific present gardens considered horticulture allotment
8   0.17857 environment conservation wildlife rescue animals nature natural park environmental green protection animal dogs water protect forest volunteers woodland welfare garden
9   0.17857 recreation leisure welfare recreational neighbourhood religious political voluntary classes maintenance forms lectures ground lincolnshire common youth villages physical manage management
10  0.17857 arts theatre workshops art creative dance festival film cultural drama artists create media culture music core deliver skills production series
11  0.17857 maintenance deaf building buildings mary repair restoration preservation heritage hearing fabric john historic preserve railway pcc upkeep diocese stoke trinity
12  0.17857 music concerts musical arts art choir performance band professional singing choral theatre performances festival musicians drama perform science concert presentation
13  0.17857 worship teaching youth sick courses elderly pastoral mission overseas visiting space personal prayer religious bereaved special senior taking sermons citizens
14  0.17857 equipment raise purchase friends fundraising raising staff resources library additional extra learning books buy pta attending teachers order raised parent
15  0.17857 club youth environment safe outdoor families holiday learning sessions fun garden nursery space learn early playgroup childcare family holidays create
16  0.17857 advice information advocacy welfare housing benefits legal free debt employment volunteers citizens salary covid outreach guidance specialist health application independent
17  0.17857 volunteers transport volunteer equipment hire expenses travel staff materials voluntary valley fees meets brighton publicity information venue office reading purchase
18  0.17857 refugees asylum seekers refugee rights human awareness equality integration lgbt migrants core migrant diversity advice immigration seeking covid gender discrimination
19  0.17857 history museum research heritage literature charge war distributing message religious bibles royal study worship forces science veterans lectures collection historical
20  0.17857 older health isolation wellbeing reduce healthy dementia sessions isolated deliver elderly volunteers befriending exercise loneliness physical home mental impaired eating
21  0.17857 women abuse domestic violence sexual victims girls risk alcohol survivors drug men offenders awareness child affected safe recovery rape crime
22  0.17857 scout girls physical equipment scouting boys scouts sailing sea skills outdoor camping riding spiritual safety international purchase camp intellectual potential
23  0.17857 faith religious religion worship teaching prayer spiritual poverty study principles mission ministry pastoral fellowship love place christians outreach lord teachings
24  0.17857 skills youth employment disadvantaged deliver mentoring positive sessions workshops increase volunteering build learning behaviour gain personal esteem building future employability
25  0.17857 poverty health students sickness aid medical university college hiv international countries water foundation orphans supports scholarships aids disadvantaged bursaries healthcare
26  0.17857 health mental families family counselling wellbeing home emotional covid sessions start physical therapy problems experiencing peer volunteers bereavement vulnerable isolation
27  0.17857 building refurbishment facility disabled install replace refurbish system space safety equipment toilet heating users upgrade roof replacement improvements purchase safe
```
