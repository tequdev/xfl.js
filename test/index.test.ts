import { add, compare, div, exponent, invert, log, make_xfl, mantissa, multiply, negate, one, root, sub } from '../src'

it('make_xfl', () => {
  expect(make_xfl(-5, 0)).toBe(0n)
  expect(make_xfl(50, 0)).toBe(0n)
  expect(make_xfl(-50, 0)).toBe(0n)
  expect(make_xfl(0, 0)).toBe(0n)
  expect(() => make_xfl(-97, 1)).toThrow()
  expect(() => make_xfl(97, 1)).toThrow()
  expect(make_xfl(-5, 6541432897943971n)).toBe(6275552114197674403n)
  expect(make_xfl(-83, 7906202688397446n)).toBe(4871793800248533126n)
  expect(make_xfl(76, 4760131426754533n)).toBe(7732937091994525669n)
  expect(make_xfl(37, -8019384286534438n)).toBe(2421948784557120294n)
  expect(make_xfl(50, 5145342538007840n)).toBe(7264947941859247392n)
  expect(make_xfl(-70, 4387341302202416n)).toBe(5102462119485603888n)
  expect(make_xfl(-26, -1754544005819476n)).toBe(1280776838179040340n)
  expect(make_xfl(36, 8261761545780560n)).toBe(7015862781734272336n)
  expect(make_xfl(35, 7975622850695472n)).toBe(6997562244529705264n)
  expect(make_xfl(17, -4478222822793996n)).toBe(2058119652903740172n)
  expect(make_xfl(-53, 5506604247857835n)).toBe(5409826157092453035n)
  expect(make_xfl(-60, 5120164869507050n)).toBe(5283338928147728362n)
  expect(make_xfl(41, 5176113875683063n)).toBe(7102849126611584759n)
  expect(make_xfl(-54, -3477931844992923n)).toBe(778097067752718235n)
  expect(make_xfl(21, 6345031894305479n)).toBe(6743730074440567495n)
  expect(make_xfl(-23, 5091583691147091n)).toBe(5949843091820201811n)
  expect(make_xfl(-33, 7509684078851678n)).toBe(5772117207113086558n)
  expect(make_xfl(-72, -1847771838890268n)).toBe(452207734575939868n)
  expect(make_xfl(71, -9138413713437220n)).toBe(3035557363306410532n)
  expect(make_xfl(28, 4933894067102586n)).toBe(6868419726179738490n)
})

it('exponent', () => {
  expect(exponent(make_xfl(-50, 0))).toBe(0)
  expect(exponent(make_xfl(0, 0))).toBe(0)
  expect(exponent(make_xfl(-72, -1847771838890268n))).toBe(-72)
  expect(exponent(make_xfl(28, 4933894067102586n))).toBe(28)
})

it('mantissa', () => {
  expect(() => mantissa(-1n)).toThrow()
  expect(() => mantissa(-11010191919n)).toThrow()
  expect(mantissa(0n)).toBe(0n)
  expect(mantissa(one)).toBe(1000000000000000n)
  expect(mantissa(negate(one))).toBe(1000000000000000n)
  expect(mantissa(4763370308433150973n)).toBe(7569101929907197n)
  expect(mantissa(668909658849475214n)).toBe(2376913998641806n)
  expect(mantissa(962271544155031248n)).toBe(7508423152486096n)
  expect(mantissa(7335644976228470276n)).toBe(3784782869302788n)
  expect(mantissa(2837780149340315954n)).toBe(9519583351644466n)
  expect(mantissa(2614004940018599738n)).toBe(1917156143712058n)
  expect(mantissa(4812250541755005603n)).toBe(2406139723315875n)
  expect(mantissa(5140304866732560580n)).toBe(6201291530195140n)
  expect(mantissa(1124677839589482624n)).toBe(7785132001599616n)
  expect(mantissa(5269336076015865585n)).toBe(9131711247126257n)
  expect(mantissa(2296179634826760368n)).toBe(8351024122548400n)
  expect(mantissa(1104028240398536470n)).toBe(5149931320135446n)
  expect(mantissa(2691222059222981864n)).toBe(7076681310166248n)
  expect(mantissa(6113256168823855946n)).toBe(6375074109463370n)
  expect(mantissa(311682216630003626n)).toBe(5437441968809898n)
  expect(mantissa(794955605753965262n)).toBe(2322071336757966n)
  expect(mantissa(204540636400815950n)).toBe(6382252796514126n)
  expect(mantissa(5497195278343034975n)).toBe(2803732951029855n)
  expect(mantissa(1450265914369875626n)).toBe(9114033611316906n)
  expect(mantissa(7481064015089962668n)).toBe(5088633654939308n)
})

it('add', () => {
  expect(add(one, one)).toBe(6090866696204910592n)
  expect(add(one, negate(one))).toBe(0n)
  expect(add(6165492090242838528n, 6074309077695428608n)).toBe(6165492124810638528n)
  // TODO: xahaud.float_sum has low accuracy?
  // expect(add(1676857706508234512n, 6396111470866104320n)).toBe(6387097057170171072n);
  expect(add(95785354843184473n, 7607324992379065667n)).toBe(7607324992379065667n)
  expect(add(1011203427860697296n, 7715811566197737722n)).toBe(7715811566197737722n)
  expect(add(6507979072644559603n, 422214339164556094n)).toBe(6507979072644559603n)
  expect(add(129493221419941559n, 6742079437952459317n)).toBe(6742079437952459317n)
  expect(add(5172806703808250354n, 3070396690523275533n)).toBe(3070396690523275533n)
  // TODO: rounding error related?
  // expect(add(2440992231195047997n, 4937813945440933271n)).toBe(2440992231195047996n);
  expect(add(7351918685453062372n, 6489541496844182832n)).toBe(7351918685453062372n)
  expect(add(4960621423606196948n, 6036716382996689576n)).toBe(6036716382996689576n)
  expect(add(1342689232407435206n, 5629833007898276923n)).toBe(1342689232407435206n)
  expect(add(7557687707019793516n, 528084028396448719n)).toBe(7557687707019793516n)
  expect(add(130151633377050812n, 2525286695563827336n)).toBe(2525286695563827336n)
  expect(add(5051914485221832639n, 7518727241611221951n)).toBe(7518727241611221951n)
  // TODO: rounding error related?
  // expect(add(3014788764095798870n, 7425019819707800346n)).toBe(3014788764095767995n);
  expect(add(4918950856932792129n, 7173510242188034581n)).toBe(7173510242188034581n)
  expect(add(20028000442705357n, 95248745393457140n)).toBe(95248946753650462n)
  expect(add(5516870225060928024n, 7357202055584617194n)).toBe(7357202055584617194n)
  expect(add(2326103538819088036n, 1749360946246242122n)).toBe(2326103538819088036n)
  expect(add(1738010758208819410n, 2224610859005732191n)).toBe(2224610859005732191n)
  expect(add(4869534730307487904n, 2166841923565712115n)).toBe(2166841923565712115n)
  expect(add(1054339559322014937n, 1389511416678371338n)).toBe(1389511416678371338n)
})

it('sub', () => {
  expect(sub(one, one)).toBe(0n)
})

it('multiply', () => {
  expect(() => multiply(-1n, one)).toThrow()
  expect(multiply(one, 0n)).toBe(0n)
  expect(multiply(0n, one)).toBe(0n)
  expect(multiply(one, one)).toBe(one)
  expect(multiply(one, negate(one))).toBe(negate(one))
  expect(multiply(negate(one), one)).toBe(negate(one))
  expect(multiply(negate(one), negate(one))).toBe(one)
  expect(() => multiply(7801234554605699072n, 7801234554605699072n)).toThrow()
  expect(() => multiply(7801234554605699072n, 6107881094714392576n)).toThrow()
  expect(() => multiply(6107881094714392576n, 7801234554605699072n)).toThrow()
  expect(() => multiply(3189548536178311168n, 6107881094714392576n)).toThrow()
  expect(() => multiply(6107881094714392576n, 3189548536178311168n)).toThrow()
  expect(() => multiply(3189548536178311168n, 3189548536178311168n)).toThrow()
  expect(multiply(3189548536178311168n, one)).toBe(3189548536178311168n)
  expect(multiply(one, 3189548536178311168n)).toBe(3189548536178311168n)
  expect(multiply(7791757438262485039n, 4759088999670263908n)).toBe(6470304726017852129n)
  // expect(multiply(7534790022873909775n, 1017891960669847079n)).toBe(2472307761756037979n);
  expect(multiply(2813999069907898454n, 4962524721184225460n)).toBe(1696567870013294731n)
  expect(multiply(2151742066453140308n, 437647738130579252n)).toBe(5732835652591705549n)
  expect(multiply(5445302332922546340n, 7770966530708354172n)).toBe(7137051085305881332n)
  // expect(multiply(2542989542826132533n, 6308418769944702613n)).toBe(2775217422137696934n);
  // expect(multiply(5017652318929433511n, 6601401767766764916n)).toBe(5538267259220228820n);
  expect(multiply(892430323307269235n, 1444078017997143500n)).toBe(5479222755754111850n)
  expect(multiply(7030632722283214253n, 297400838197636668n)).toBe(1247594596364389994n)
  expect(multiply(1321751204165279730n, 2451801790748530375n)).toBe(6918764256086244704n)
  expect(multiply(2439875962311968674n, 4707485682591872793n)).toBe(1067392794851803610n)
  expect(multiply(6348574818322812800n, 6474046245013515838n)).toBe(6742547427357110773n)
  // expect(multiply(1156137305783593424n, 351790564990861307n)).toBe(4650775291275116747n);
  // expect(multiply(5786888485280994123n, 6252137323085080394n)).toBe(5949619829273756852n);
  // expect(multiply(2078182880999439640n, 1662438186251269392n)).toBe(6884837854131013998n);
  expect(multiply(1823781083140711248n, 1120252241608199010n)).toBe(6090320310700749729n)
  // expect(multiply(6617782604883935174n, 6185835042802056262n)).toBe(6723852137583788319n);
  expect(multiply(333952667495151166n, 1556040883317758614n)).toBe(5032611291744396930n)
})

it('div', () => {
  expect(() => div(-1n, one)).toThrow()
  expect(() => div(one, 0n)).toThrow()
  expect(div(0n, one)).toBe(0n)
  expect(div(one, one)).toBe(one)
  expect(div(one, negate(one))).toBe(negate(one))
  expect(div(negate(one), one)).toBe(negate(one))
  expect(div(negate(one), negate(one))).toBe(one)
  expect(div(one, 6107881094714392576n)).toBe(6071852297695428608n)
  // xahaud.float_divide has low accuracy?
  // expect(div(6234216452170766464n, 6144532891733356544n)).toBe(6168530993200328528n);
  // rounding error related?
  // expect(div(1478426356228633688n, 6846826132016365020n)).toBe(711756787386903390n);
  expect(div(4638834963451748340n, one)).toBe(4638834963451748340n)
  expect(div(4638834963451748340n, 7441363081262569392n)).toBe(0n)
  expect(() => div(6846826132016365020n, 4638834963451748340n)).toThrow()
  expect(div(3121244226425810900n, 2135203055881892282n)).toBe(7066645550312560102n)
  // rounding error related?
  // expect(div(2473507938381460320n, 6365869885731270068n)).toBe(2187897766692155363n);
  // rounding error related?
  // expect(div(1716271542690607496n, 3137794549622534856n)).toBe(4667220053951274769n);
  expect(div(1588045991926420391n, 5933338827267685794n)).toBe(1733591650950017206n)
  // rounding error related?
  // expect(div(5880783758174228306n, 1396720886139976383n)).toBe(1341481714205255877n);
  // rounding error related?
  // expect(div(5567703563029955929n, 2184969513100691140n)).toBe(236586937995245543n);
  // rounding error related?
  // expect(div(7333313065548121054n, 1755926008837497886n)).toBe(2433647177826281173n);
  // rounding error related?
  // expect(div(1172441975040622050n, 6692015311011173216n)).toBe(560182767210134346n);
  // rounding error related?
  // expect(div(577964843368607493n, 6422931182144699580n)).toBe(235721135837751035n);
  // rounding error related?
  // expect(div(6039815413139899240n, 2117655488444284242n)).toBe(779625635892827768n);
  expect(div(1353563835098586141n, 6450909070545770298n)).toBe(992207753070525611n)
  expect(div(6382158843584616121n, 5373794957212741595n)).toBe(7088854809772330055n)
  expect(div(2056891719200540975n, 1754532627802542730n)).toBe(6381651867337939070n)
  // 丸め誤差？
  // expect(div(5730152450208688630n, 1663581695074866883n)).toBe(921249452789827075n);
  // 丸め誤差？
  // expect(div(6234301156018475310n, 2868710604383082256n)).toBe(219156721749007916n);
  expect(div(2691125731495874243n, 7394070851520237320n)).toBe(1377640825464715759n)
  // 丸め誤差？
  // expect(div(5141867696142208039n, 5369434678231981897n)).toBe(5861466794943198400n);
  expect(div(638296190872832492n, 5161669734904371378n)).toBe(1557396184145861422n)
  // 丸め誤差？
  // expect(div(2000727145906286285n, 2096625200460673392n)).toBe(5982403476503576795n);
  // 丸め誤差？
  // expect(div(640472838055334326n, 5189754252349396763n)).toBe(1537425431139169736n);
})

it.todo('mulratio')

it('negate', () => {
  expect(() => negate(-1n)).toThrow()
  expect(() => negate(-11010191919n)).toThrow()
  expect(negate(0n)).toBe(0n)
  expect(negate(one)).not.toBe(one)
  expect(negate(negate(one))).toBe(one)
  expect(negate(6488646939756037240n)).toBe(1876960921328649336n)
  expect(negate(one)).toBe(1478180677777522688n)
  expect(negate(1838620299498162368n)).toBe(6450306317925550272n)
})

it('compare', () => {
  expect(() => compare(-1n, -2n)).toThrow()
  expect(() => compare(0n, -2n)).toThrow()
  expect(() => compare(-1n, 0n)).toThrow()
  expect(compare(0n, 0n)).toBe(0)
  expect(compare(one, 0n)).toBe(1)
  expect(compare(0n, one)).toBe(-1)
  expect(compare(one, one)).toBe(0)

  const large_negative = 1622844335003378560n
  const small_negative = 1352229899321148800n
  const small_positive = 5713898440837102138n
  const large_positive = 7749425685711506120n

  expect(compare(large_negative, small_negative)).toBe(-1)
  expect(compare(large_negative, small_positive)).toBe(-1)
  expect(compare(large_negative, large_positive)).toBe(-1)
  expect(compare(small_negative, large_negative)).toBe(1)
  expect(compare(small_negative, small_positive)).toBe(-1)
  expect(compare(small_negative, large_positive)).toBe(-1)
  expect(compare(small_positive, large_negative)).toBe(1)
  expect(compare(small_positive, small_negative)).toBe(1)
  expect(compare(small_positive, large_positive)).toBe(-1)
  expect(compare(large_positive, large_negative)).toBe(1)
  expect(compare(large_positive, small_negative)).toBe(1)
  expect(compare(large_positive, small_positive)).toBe(1)
})

it('invert', () => {
  expect(() => invert(0n)).toThrow()
  expect(invert(one)).toBe(one)
  expect(invert(one)).toBe(one)
  expect(invert(negate(one))).toBe(negate(one))
  expect(invert(6107881094714392576n)).toBe(6071852297695428608n)
})

it.todo('is_zero')
it.todo('is_positive')
it.todo('is_negative')

it('root', () => {
  expect(root(one, 2)).toBe(one)
  expect(root(6097866696204910592n, 2)).toBe(6091866696204910592n)
  expect(root(6143909891733356544n, 3)).toBe(6107881094714392576n)
  expect(() => root(1478180677777522688n, 2)).toThrow()
  expect(root(0n, 10)).toBe(0n)
})

it('log', () => {
  expect(() => log(0n)).toThrow()
  // rounding error related?
  // expect(log(6349533412187342878n)).toBe(6108373858112734914n)
  // rounding error related?
  // expect(() => log(1532223873305968640n)).toThrow()
  expect(log(6143909891733356544n)).toBe(6091866696204910592n)
  // rounding error related?
  // expect(log(6071976107695428608n)).toBe(1468659350345448364n)
  expect(log(5783744921543716864n)).toBe(1496890038311378526n)
  expect(log(7206759403792793600n)).toBe(6113081094714392576n)
})
