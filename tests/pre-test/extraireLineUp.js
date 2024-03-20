"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saveFile_1 = require("../commands/saveFile");
const homeTeam = 'Cougar';
const abrevHomeTeam = 'Len';
const awayTeam = 'St-Jean';
const abrevAwayTeam = 'CRC';
const gamePlay2 = `PLAY #\tODK\tDN\tDIST\tHASH\tYARD LN\tPLAY TYPE\tRESULT\tGN/LS\tQTR\tPASSER_Jersey\tPASSER_Name\tRUSHER_Jersey\tRUSHER_Name\tRECEIVER_Jersey\tRECEIVER_Name\tTACKLER1_Jersey\tTACKLER1_Name\tTACKLER2_Jersey\tTACKLER2_Name\tINTERCEPTED BY_Jersey\tINTERCEPTED BY_Name\tOPP PASSER\tOPP RECEIVER\tOPP RUSHER\tRECOVERED BY_Jersey\tRECOVERED BY_Name\tKICKER_Jersey\tKICKER_Name\tKICK YARDS\tRETURNER_Jersey\tRETURNER_Name\tRET YARDS\tTITLE\tOFF FORM\tOFF PLAY\tOFF STR\tPLAY DIR\tGAP\tPASS ZONE\tDEF FRONT\tCOVERAGE\tBLITZ\tDOG\tTEMPO
1\tK\t0\t0\tL\t-45\tKO Rec\tReturn\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t53\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
2\tO\t1\t10\tL\t-40\tRun\tRush\t0\t1\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t37(6) DOG\t\t\t\t\t\t\t\t\t
3\tO\t2\t10\tL\t-40\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t8(9) YETI BLAZE SLED WK\t\t\t\t\t\t\t\t\t
4\tO\t3\t10\tL\t-40\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING TRIPS\tDRIVE CAPTAIN\t\t\t\t\t\t\t\t\t
5\tK\t4\t10\tL\t-40\tPunt\tFumble\t0\t1\t\t\t\t\t\t\t34\tSasha Jouthe\t\t\t\t\t\t\t\t87\tRaphael St-Hilaire\t87\tRaphael St-Hilaire\t42\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
6\tO\t1\t10\tL\t38\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t538(9) TUNA WK\t\t\t\t\t\t\t\t\t
7\tO\t2\t10\tL\t38\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\tFOWL WK\t\t\t\t\t\t\t\t\t
8\tO\t3\t10\tL\t38\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDRIVE CALI\t\t\t\t\t\t\t\t\t
9\tK\t4\t10\tL\t38\tFG\tNo Good\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
10\tD\t1\t10\tR\t-20\tRun\tRush\t-2\t1\t\t\t\t\t\t\t95\tCharles-Hugo Thomassin\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tSILVER\tSTRONG RAW\t\t
11\tD\t2\t12\tR\t-18\tPass\tIncomplete\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tRODGERS\t\t\t
12\tD\t3\t12\tL\t-18\tPass\tInterception\t0\t1\t\t\t\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7UP\tROLL\tFIRE\t\t
13\tO\t1\t10\tL\t20\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t39(8) BOOT SCISSOR SCUBA\t\t\t\t\t\t\t\t\t
14\tO\t2\t10\tL\t20\tRun\tRush\t4\t1\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t37(6) DOG\t\t\t\t\t\t\t\t\t
15\tO\t3\t6\tR\t16\tPass\tComplete\t5\t1\t8\tAntoine Lincourt\t\t\t80\tIsaac Lussier-Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t9(8) YETI BLAZE DICE\t\t\t\t\t\t\t\t\t
16\tK\t4\t1\tR\t11\tFG\tGood\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
17\tK\t1\t10\tL\t-45\tKO\tReturn\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t64\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
18\tD\t1\t10\tL\t-28\tRun\tRush\t1\t1\t\t\t\t\t\t\t7\tAmbroise Duplessis\t15\tSebastien Cantin-Bolduc\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK\t\t
19\tD\t2\t9\tL\t-29\tPass\tIncomplete\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tRED\tWHIP\t\t
20\tD\t3\t9\tM\t-29\tPass\tInterception\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t4\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tRAIN\t\t\t
21\tK\t0\t5\tM\t5\tExtra Pt.\tGood\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
22\tK\t0\t0\tL\t-45\tKO\tReturn\t0\t1\t\t\t\t\t\t\t\t\t28\tChristophe Roy\t\t\t\t\t\t\t\t27\tJayden Rice\t75\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
23\tD\t1\t10\tL\t-31\tPass\tSack\t-7\t1\t\t\t\t\t\t\t7\tAmbroise Duplessis\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tWEAK BRAVO\t\t
24\tD\t2\t17\tL\t-24\tRun\tRush\t33\t1\t\t\t\t\t\t\t44\tElie Boisvert\t\t\t\t\t\t\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
25\tD\t1\t10\tL\t51\tPass\tIncomplete\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
26\tD\t2\t10\tL\t51\tRun\tRush\t13\t1\t\t\t\t\t\t\t13\tAlexis Dumais\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK\t\t
27\tD\t1\t10\tR\t38\tRun\tRush\t4\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tRED\tDBL BOX\t\t
28\tD\t2\t6\tR\t34\tRun\tRush\t10\t1\t\t\t\t\t\t\t22\tGage Blasco\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tYELLOW\t\t\t
29\tD\t1\t10\tR\t24\tPass\tPenalty\t-10\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tSILVER\tSTRONG\t\t
30\tD\t1\t20\tR\t34\tPass\tIncomplete\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK SAM\t\t
31\tD\t2\t20\tL\t34\tPass\tComplete\t24\t1\t\t\t\t\t\t\t13\tAlexis Dumais\t\t\t\t\t18\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSMOG\tWEAK TUFF\t\t
32\tD\t1\t10\tL\t10\tRun\tRush\t9\t1\t\t\t\t\t\t\t44\tElie Boisvert\t\t\t\t\t\t\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tSILVER\tRAW\t\t
33\tD\t2\t1\tL\t1\tRun\tRush\t1\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
34\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
35\tK\t0\t0\tL\t-45\tKO Rec\tReturn\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t57\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
36\tO\t1\t10\tL\t-24\tRun\tRush\t20\t1\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t37(6) DOG\t\t\t\t\t\t\t\t\t
37\tO\t1\t10\tR\t-44\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tHAWK\t\t\t\t\t\t\t\t\t
38\tO\t2\t10\tR\t-44\tRun\t\t0\t1\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
39\tO\t3\t10\tR\t-44\tPass\tIncomplete\t0\t1\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDINGO WK\t\t\t\t\t\t\t\t\t
40\tK\t3\t10\tL\t-44\tPunt\tReturn\t0\t1\t\t\t\t\t\t\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t51\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
41\tD\t1\t10\tM\t-17\tRun\tRush\t2\t1\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSAND\tWEAK BRAVO\t\t
42\tD\t2\t8\tR\t-19\tRun\tRush\t2\t1\t\t\t\t\t\t\t15\tSebastien Cantin-Bolduc\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tYELLOW\tSTRONG LOOP\t\t
43\tD\t3\t6\tR\t-21\tPass\tIncomplete\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWIDE\tPALMS\tBAT\t\t
44\tK\t4\t6\tL\t-21\tPunt Rec\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t29\t2\tPlamedi Mbuyi\t\t\t\t\t\t\t\t\t\t\t\t\t
45\tO\t1\t10\tL\t46\tRun\tRush\t9\t2\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t36(7) DOG\t\t\t\t\t\t\t\t\t
46\tO\t2\t1\tL\t37\tRun\tRush\t-1\t2\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING TRIPS\t33(2) BOMB\t\t\t\t\t\t\t\t\t
47\tO\t3\t2\tL\t38\tRun\tPenalty\t-5\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
48\tO\t3\t7\tL\t43\tPass\tComplete\t3\t2\t8\tAntoine Lincourt\t\t\t88\tJérémy St-Onge\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING TRIPS\tDRIVE CAPTAIN\t\t\t\t\t\t\t\t\t
49\tK\t4\t4\tL\t40\tPunt\tFumble\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t34\tSasha Jouthe\t27\tJayden Rice\t37\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
50\tO\t1\t4\tM\t4\tRun\tRush\t0\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKING NEAR SILVER\t36(7) PUMA\t\t\t\t\t\t\t\t\t
51\tO\t2\t4\tL\t4\tRun\tRush\t1\t2\t8\tAntoine Lincourt\t8\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t3(2) RACCOON MADDEN\t\t\t\t\t\t\t\t\t
52\tO\t3\t3\tL\t3\tPass\tIncomplete\t0\t2\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t33(2) BOOT YOYO SNAG\t\t\t\t\t\t\t\t\t
53\tO\t4\t3\tR\t3\tRun\tRush\t-1\t2\t8\tAntoine Lincourt\t8\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t37(6) DOG\t\t\t\t\t\t\t\t\t
54\tD\t1\t10\tR\t-4\tRun\tRush\t1\t2\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
55\tD\t2\t9\tR\t-5\tRun\tRush\t3\t2\t\t\t\t\t\t\t9\tDonovan King-Henri\t4\tLudovic Martin\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tRAIN\t\t\t
56\tD\t3\t6\tR\t-8\tPass\tComplete\t7\t2\t\t\t\t\t\t\t22\tGage Blasco\t\t\t\t\t18\t88\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tSTRONG CHARLIE\t\t
57\tD\t1\t10\tL\t-15\tRun\tRush\t8\t2\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tSTRONG CHARLIE\t\t
58\tD\t2\t2\tM\t-23\tRun\tRush\t3\t2\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tHOLD\tWILL RAVEN\t\t
59\tD\t1\t10\tM\t-26\tPass\tIncomplete\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tGREEN\tSTRIP\t\t
60\tD\t2\t10\tM\t-26\t\t\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
61\tD\t2\t10\tL\t-26\tRun\tRush\t2\t2\t\t\t\t\t\t\t4\tLudovic Martin\t55\tXavier Roy\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tYELLOW\t\t\t
62\tD\t3\t8\tL\t-28\tPass\tIncomplete\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7UP\tROLL\tFIRE\t\t
63\tK\t4\t8\tR\t-28\tPunt Rec\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t39\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t
64\tO\t1\t10\tM\t-48\tRun\tRush\t2\t2\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t38(9) PONY\t\t\t\t\t\t\t\t\t
65\tO\t2\t8\tR\t-50\tPass\tComplete\t6\t2\t8\tAntoine Lincourt\t\t\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJORDAN\tZIP PARROT\t\t\t\t\t\t\t\t\t
66\tO\t3\t2\tR\t54\tRun\tRush\t4\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t37(6) DOG LEAD\t\t\t\t\t\t\t\t\t
67\tO\t1\t10\tR\t50\tRun\tRush\t4\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t39(8) PONY\t\t\t\t\t\t\t\t\t
68\tO\t2\t6\tR\t46\tPass\tIncomplete\t0\t2\t8\tAntoine Lincourt\t\t\t1\tDyondrea Fraser\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\tBRICK WINDOW\t\t\t\t\t\t\t\t\t
69\tO\t3\t6\tM\t46\tRun\tRush\t6\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t9(8) YETI BLAZE DICE\t\t\t\t\t\t\t\t\t
70\tO\t1\t10\tR\t40\tPass\tComplete\t10\t2\t8\tAntoine Lincourt\t\t\t1\tDyondrea Fraser\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tHAWK\t\t\t\t\t\t\t\t\t
71\tO\t1\t10\tM\t30\tRun\tRush\t15\t2\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t39(8) PONY\t\t\t\t\t\t\t\t\t
72\tO\t1\t10\tR\t15\tRun\tRush\t12\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t36(7) DOG LEAD\t\t\t\t\t\t\t\t\t
73\tO\t1\t10\tM\t3\tRun\tRush, TD\t3\t2\t8\tAntoine Lincourt\t\t\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t37(6) DOG LEAD\t\t\t\t\t\t\t\t\t
74\tK\t2\t7\t\t0\tExtra Pt.\t\t\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
75\tK\t0\t5\tM\t5\tExtra Pt.\tGood\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
76\tK\t0\t0\tL\t-50\tKO\tReturn\t0\t2\t\t\t\t\t\t\t29\tZachary Pipe\t28\tChristophe Roy\t\t\t\t\t\t\t\t27\tJayden Rice\t61\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
77\tD\t1\t10\tL\t-24\tRun\tRush\t-2\t2\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMARBLE\tWEAK BRAVO\t\t
78\tD\t2\t12\tL\t-22\tPass\tIncomplete\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tSAM TUFF\t\t
79\tD\t3\t12\tL\t-22\t\t\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
80\tD\t3\t12\tL\t-22\tPass\tComplete\t2\t2\t\t\t\t\t\t\t\t\t\t\t\t\t18\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPALMS\tFALCON\t\t
81\tK\t4\t10\tR\t-24\tPunt Rec\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t33\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t
82\tO\t1\t10\tR\t-53\tPass\tIncomplete\t0\t2\t8\tAntoine Lincourt\t\t\t80\tIsaac Lussier-Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tJORDAN\tSTORK STR SWING\t\t\t\t\t\t\t\t\t
83\tO\t2\t10\tR\t-53\tRun\tPenalty\t-10\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
84\tO\t2\t20\tR\t-43\tPass\tComplete\t19\t2\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t551(0) CHARLIE DUNES\t\t\t\t\t\t\t\t\t
85\tO\t3\t1\tR\t48\tRun\tRush\t2\t2\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t39(8) YETI BOMBER\t\t\t\t\t\t\t\t\t
86\tO\t1\t10\tM\t46\tRun\tRush\t2\t2\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
87\tO\t2\t8\tM\t44\tPass\tIncomplete\t0\t2\t8\tAntoine Lincourt\t\t\t80\tIsaac Lussier-Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t9(8) YETI BLAZE DICE\t\t\t\t\t\t\t\t\t
88\tO\t3\t8\tM\t44\tPass\tIncomplete\t0\t2\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDRIVE CALI\t\t\t\t\t\t\t\t\t
89\tK\t4\t8\tR\t44\tPunt\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t43\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
90\tD\t1\t10\tM\t-14\tRun\tRush\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
91\tK\t2\t10\tM\t-45\tKO\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t60\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
92\tD\t1\t10\tL\t-11\tRun\tRush\t8\t3\t\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tYELLOW\t\t\t
93\tD\t2\t2\tL\t-19\tRun\tPenalty\t10\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
94\tD\t1\t10\tR\t-29\tPass\tPenalty\t12\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
95\tD\t1\t10\tR\t-41\tRun\tRush\t0\t3\t\t\t\t\t\t\t9\tDonovan King-Henri\t4\tLudovic Martin\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK CHARLIE\t\t
96\tD\t2\t10\tR\t-41\tRun\tRush\t4\t3\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tSAM CHARLIE\t\t
97\tD\t3\t6\tR\t-45\tPass\tIncomplete\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tGREEN\tDBL BOX\t\t
98\tK\t4\t6\tL\t-45\tPunt Rec\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t30\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t
99\tO\t1\t10\tL\t-43\tRun\tRush\t-3\t3\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
100\tO\t2\t13\tL\t-40\tPass\tIncomplete\t0\t3\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tSTORK STR\t\t\t\t\t\t\t\t\t
101\tO\t3\t13\tL\t-40\tPass\tIncomplete\t0\t3\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\tBRICK CLEAR\t\t\t\t\t\t\t\t\t
102\tK\t4\t13\tR\t-40\tPunt\tReturn\t0\t3\t\t\t\t\t\t\t9\tDonovan King-Henri\t17\tAlexandre Milnes-Pominville\t\t\t\t\t\t\t\t27\tJayden Rice\t19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
103\tD\t1\t10\tL\t50\tPass\tComplete\t2\t3\t\t\t\t\t\t\t\t\t28\tChristophe Roy\t\t\t6\t8\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK CHARLIE\t\t
104\tD\t2\t8\tM\t48\tRun\tRush\t6\t3\t\t\t\t\t\t\t4\tLudovic Martin\t17\tAlexandre Milnes-Pominville\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tGREEN\tSTRONG LOOP\t\t
105\tD\t3\t2\tR\t42\tRun\tRush\t2\t3\t\t\t\t\t\t\t55\tXavier Roy\t\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tSILVER\tRAW\t\t
106\tD\t1\t10\tR\t25\tPass\tIncomplete\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
107\tD\t2\t10\tR\t25\tRun\tPenalty\t-5\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tWEAK BRAVO\t\t
108\tD\t2\t15\tR\t30\tRun\tRush\t3\t3\t\t\t\t\t\t\t39\tNathaniel Allan\t9\tDonovan King-Henri\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSMOG\tWEAK TUFF\t\t
109\tD\t3\t12\tR\t27\tPass\tIncomplete\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWIDE\tPALMS\tWASTE\t\t
110\tK\t4\t12\tR\t27\tFG Block\tGood\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
111\tO\t1\t10\tL\t-35\tRun\tRush\t4\t3\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t37(6) DOG LEAD\t\t\t\t\t\t\t\t\t
112\tO\t2\t6\tL\t-39\tRun\tRush\t1\t3\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t36(7) DOG\t\t\t\t\t\t\t\t\t
113\tO\t3\t5\tL\t-40\tPass\tIncomplete\t0\t3\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tHAWK\t\t\t\t\t\t\t\t\t
114\tK\t4\t5\tR\t-40\tPunt\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t41\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
115\tD\t1\t10\tM\t-39\tRun\tRush\t3\t3\t\t\t\t\t\t\t9\tDonovan King-Henri\t15\tSebastien Cantin-Bolduc\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK CHARLIE\t\t
116\tD\t2\t7\tM\t-42\tRun\tRush\t4\t3\t\t\t\t\t\t\t9\tDonovan King-Henri\t15\tSebastien Cantin-Bolduc\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tHOLD\tWILL RAVEN\t\t
117\tD\t3\t3\tL\t-46\tPass\tComplete\t7\t3\t\t\t\t\t\t\t22\tGage Blasco\t9\tDonovan King-Henri\t\t\t6\t8\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tSILVER\tSAW\t\t
118\tD\t1\t10\tR\t-53\tRun\tRush\t41\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tRAIN\t\t\t
119\tD\t1\t10\tR\t16\tRun\tRush\t1\t3\t\t\t\t\t\t\t99\tAlexandre Athens-Leger\t44\tElie Boisvert\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tRED\t\t\t
120\tD\t2\t9\tM\t15\tRun\tRush\t3\t3\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t\t\t\t\t\t\t24\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
121\tD\t3\t6\tL\t12\tPass\tComplete\t9\t3\t\t\t\t\t\t\t\t\t\t\t\t\t6\t88\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tGREEN\tDBL BOX\t\t
122\tD\t1\t10\tL\t3\tRun\tRush\t1\t3\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t4\tLudovic Martin\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tSILVER\tSAW\t\t
123\tD\t2\t9\tL\t2\tRun\tRush\t2\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
124\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
125\tK\t0\t0\tR\t-45\tKO Rec\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t55\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
126\tO\t1\t10\tR\t-40\tPass\tComplete\t31\t3\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\tBRICK WINDOW\t\t\t\t\t\t\t\t\t
127\tO\t1\t10\tR\t39\tRun\tRush\t-1\t3\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t37(6) DOG\t\t\t\t\t\t\t\t\t
128\tO\t2\t11\tR\t40\tPass\tIncomplete\t0\t3\t8\tAntoine Lincourt\t\t\t1\tThomas Trudel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t39(8) BOOT SCISSOR SCUBA\t\t\t\t\t\t\t\t\t
129\tO\t3\t11\tR\t40\tPass\tIncomplete\t0\t3\t8\tAntoine Lincourt\t\t\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\t551(0) REEF WK\t\t\t\t\t\t\t\t\t
130\tK\t4\t11\tL\t40\tPunt\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t39\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
131\tD\t1\t10\tL\t-7\tRun\tRush\t4\t3\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t4\tLudovic Martin\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWILL\t\t
132\tD\t2\t6\tR\t-11\tPass\tComplete\t34\t3\t\t\t\t\t\t\t\t\t\t\t\t\t6\t8\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tWIND\tWEAK CHARLIE\t\t
133\tD\t1\t10\tR\t-45\tRun\tRush\t4\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tRAIN\tDBL BOX\t\t
134\tD\t2\t6\tL\t-49\tPass\tComplete\t10\t4\t\t\t\t\t\t\t28\tChristophe Roy\t\t\t\t\t6\t8\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK BRAVO\t\t
135\tD\t1\t10\tL\t51\tPass\tIncomplete\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tWEAK\t\t
136\tD\t2\t10\tR\t51\tRun\tRush\t5\t4\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tWEAK BRAVO\t\t
137\tD\t3\t5\tR\t46\tPass\tComplete\t11\t4\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t6\t15\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tRODGERS\t\t\t
138\tD\t1\t10\tR\t35\tRun\tRush\t20\t4\t\t\t\t\t\t\t\t\t22\tGage Blasco\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tMARBLE\tWEAK CHARLIE\t\t
139\tD\t1\t10\tR\t15\tRun\tRush\t7\t4\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t90\tLouis-Philip Bernard\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tGREEN\tDBL BOX\t\t
140\tD\t2\t3\tR\t8\tRun\tRush\t6\t4\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t22\tGage Blasco\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tHOLD\tSAM HAWK\t\t
141\tD\t1\t10\tR\t2\tRun\tRush\t2\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tPINCH\tSILVER\tSAW\t\t
142\tK\t0\t5\tR\t5\tExtra Pt. Block\tGood\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
143\tK\t0\t0\tL\t-45\tKO Rec\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t50\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
144\tO\t1\t10\tL\t-29\tPass\tPenalty\t15\t4\t8\tAntoine Lincourt\t\t\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t551(0) CHARLIE DUNES\t\t\t\t\t\t\t\t\t
145\tO\t1\t10\tM\t-44\tRun\tRush\t2\t4\t8\tAntoine Lincourt\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
146\tO\t2\t8\tM\t-45\tRun\tPenalty\t20\t4\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t8(9) YETI BLAZE SLED WK\t\t\t\t\t\t\t\t\t
147\tO\t1\t10\t\t45\t\t\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
148\tO\t1\t10\tM\t45\tRun\tPenalty\t-10\t4\t8\tAntoine Lincourt\t5\tJerry Momo\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t39(8) PONY\t\t\t\t\t\t\t\t\t
149\tO\t1\t20\tM\t55\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t1\tDyondrea Fraser\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\tWIP ROVER\t\t\t\t\t\t\t\t\t
150\tO\t2\t20\tM\t55\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
151\tO\t3\t20\tR\t55\tPass\tSack\t-6\t4\t8\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tSCISSORS\t\t\t\t\t\t\t\t\t
152\tK\t4\t26\tR\t-49\tPunt\tPenalty\t10\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
153\tK\t4\t16\tL\t51\tPunt\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\tJayden Rice\t34\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
154\tD\t1\t10\tL\t-31\tRun\tRush\t8\t4\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t44\tElie Boisvert\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tRED\t\t\t
155\tD\t2\t2\tL\t-39\tRun\tRush\t4\t4\t\t\t\t\t\t\t7\tAmbroise Duplessis\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
156\tD\t1\t10\tL\t-43\tPass\tComplete\t6\t4\t\t\t\t\t\t\t13\tAlexis Dumais\t\t\t\t\t6\t17\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tRED\tDBL BOX\t\t
157\tD\t2\t4\tL\t-49\tRun\tRush\t6\t4\t\t\t\t\t\t\t22\tGage Blasco\t\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSAND\tWEAK CHARLIE\t\t
158\tD\t1\t10\tL\t55\tPass\tIncomplete\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t6\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tSILVER\tRAW\t\t
159\tD\t2\t10\tL\t55\tRun\tRush\t6\t4\t\t\t\t\t\t\t28\tChristophe Roy\t\t\t\t\t\t\t29\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tSMOG\tWEAK\t\t
160\tD\t3\t4\tR\t49\tRun\tRush\t14\t4\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tRODGERS\t\t\t
161\tD\t1\t10\tR\t35\tRun\tRush\t-1\t4\t\t\t\t\t\t\t55\tXavier Roy\t44\tElie Boisvert\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
162\tD\t2\t11\tR\t36\tPass\tSack\t-8\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOKIE\tHOLD\tSAM HAWK\t\t
163\tD\t3\t19\tL\t44\tPass\tComplete\t39\t4\t\t\t\t\t\t\t28\tChristophe Roy\t\t\t\t\t18\t85\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t7UP\tTORNADO\tFIRE\t\t
164\tD\t1\t10\tL\t5\tRun\tRush\t2\t4\t\t\t\t\t\t\t7\tAmbroise Duplessis\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
165\tD\t2\t8\tL\t3\tPass\tComplete, TD\t3\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBEAR\tGREEN\t\t\t
166\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
167\tK\t0\t\t\t-35\tKO Rec\t\t\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
168\tK\t0\t0\tL\t-40\tKO Rec\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t60\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
169\tO\t1\t10\tL\t-37\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tSURF WK\t\t\t\t\t\t\t\t\t
170\tO\t2\t10\tL\t-37\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\tWIP ROVER\t\t\t\t\t\t\t\t\t
171\tO\t3\t10\tL\t-37\tPass\tComplete\t10\t4\t8\tAntoine Lincourt\t\t\t21\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\t551(0) REEF WK\t\t\t\t\t\t\t\t\t
172\tO\t1\t10\tL\t-47\tPass\tPenalty\t0\t4\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDINGO WK\t\t\t\t\t\t\t\t\t
173\tO\t1\t20\tL\t-37\tPass\tComplete\t8\t4\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t551(0) CHARLIE DUNES\t\t\t\t\t\t\t\t\t
174\tO\t2\t12\tR\t-45\tPass\tComplete\t14\t4\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tBROOKLYN\t\t\t\t\t\t\t\t\t
175\tO\t1\t10\tR\t51\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\tWIP ROVER\t\t\t\t\t\t\t\t\t
176\tO\t2\t10\tR\t51\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDRIVE CALI\t\t\t\t\t\t\t\t\t
177\tO\t3\t10\tR\t51\tPass\tSack\t-4\t4\t8\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tBROOKLYN\t\t\t\t\t\t\t\t\t
178\tO\t4\t14\tR\t55\tPass\tIncomplete\t0\t4\t8\tAntoine Lincourt\t\t\t1\tThomas Trudel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tDRIVE CALI\t\t\t\t\t\t\t\t\t`;
const gamePlay = `PLAY #\tODK\tDN\tDIST\tHASH\tYARD LN\tPLAY TYPE\tRESULT\tGN/LS\tQTR\tRUSHER_Jersey\topp_RUSHER_Jersey\tPASSER_Jersey\tPASSER_Name\tRUSHER_Name\tOPP_PASSER_Jersey\tRECEIVER_Jersey\tRECEIVER_Name\tOPP_RECEIVER_Jersey\tTACKLER1_Jersey\tTACKLER1_Name\tOPP_Tackler1_Jersey\tTACKLER2_Jersey\tTACKLER2_Name\tOpp_Tackler2_Jersey\tBattedDown\tOpp_BattedDown\tFF\tOpp_FF\tRETURNER_Jersey\tOpp_Returner_Jersey\tKICKER_Jersey\tOpp_Kicker_Jersey\tRECOVERED BY_Jersey\tOpp_Recovered by_Jersey\tINTERCEPTED BY_Jersey\tINTERCEPTED BY_Name\tOpp_Intercepted by_Jersey\tRECOVERED BY_Name\t\tKICKER_Name\tKICK YARDS\t\tRETURNER_Name\tRET YARDS\tTITLE\tOFF FORM\tOFF PLAY\tOFF STR\tPLAY DIR\tGAP\tPASS ZONE\tDEF FRONT\tCOVERAGE\tBLITZ\tDOG\tTEMPO
1\tK\t0\t0\tL\t-45\tKO Rec\tReturn\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t40\t\t\t32\t\t\t\t\t34\t\t\t27\t\t\t\t\t\t\t\t\t55\t\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
2\tO\t1\t10\tL\t-31\tPass\tSack\t-15\t1\t8\t\t8\tAntoine Lincourt\tAntoine Lincourt\t\t\t\t\t\t\t28\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
3\tO\t2\t25\tR\t-16\tPass\tComplete\t4\t1\t\t\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t3\t\t\t21\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t3(2) RACCOON SCUBBA PEE-WEE STR\t\t\t\t\t\t\t\t\t
4\tO\t3\t21\tL\t-20\tPass\tInterception\t0\t1\t\t\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t18\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t551(0) CHARLIE DUNES\t\t\t\t\t\t\t\t\t
5\tD\t1\t10\tM\t22\tRun\tRush\t2\t1\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t13\tAlexis Dumais\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBASE\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tWEAK BOX\t\t
6\tD\t2\t8\tM\t20\tPass\tIncomplete\t0\t1\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tWEAK TUFF\t\t
7\tD\t3\t8\tM\t20\tPass\tInterception\t0\t1\t\t\t\t\t\t1\t\t\t\t\t\t2\t\t\t61\t\t\t\t\t\t\t\t\t\t\t23\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\t\t\t
8\tO\t1\t10\tM\t-25\tRun\tRush\t3\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t95\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t33(2) YETI X-SLAM\t\t\t\t\t\t\t\t\t
9\tO\t2\t7\tL\t-28\tRun\tRush\t8\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t32\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
10\tO\t1\t10\tL\t-36\tRun\tRush\t1\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING TRIPS\t35(4) TIGER\t\t\t\t\t\t\t\t\t
11\tO\t2\t9\tL\t-37\tRun\tRush\t18\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t10\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKING TRIPS\t9(8) PONY GOSE\t\t\t\t\t\t\t\t\t
12\tO\t1\t10\tL\t55\tRun\tRush\t11\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t55\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
13\tO\t1\t10\tL\t44\tRun\tRush\t5\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
14\tO\t2\t5\tM\t39\tRun\tFumble\t5\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t17\t\t\t\t\t\t32\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t33(2) YETI X-SLAM\t\t\t\t\t\t\t\t\t
15\tD\t1\t10\tL\t-32\tRun\tRush\t7\t1\t\t24\t\t\t\t\t\t\t\t95\tCharles-Hugo Thomassin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tWEAK\t\t
16\tD\t2\t3\tL\t-39\tRun\tRush\t5\t1\t\t24\t\t\t\t\t\t\t\t10\tPier-Luc Boucher\t\t55\tXavier Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
17\tD\t1\t10\tL\t-44\tRun\tRush\t4\t1\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t95\tCharles-Hugo Thomassin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
18\t\t1\t6\t\t-48\t\tPre-snap penalty pour Home\t6\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
19\tD\t1\t10\tL\t-32\tRun\tRush\t0\t1\t\t33\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
20\tD\t1\t10\tL\t47\tPass\tComplete\t9\t1\t\t\t\t\t\t1\t\t\t19\t10\tPier-Luc Boucher\t\t4\tLudovic Martin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
21\tD\t2\t1\tL\t38\tPass\tIncomplete\t0\t1\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tBRADY\tCAT\t\t
22\tD\t3\t1\tR\t23\tRun\tFumble\t15\t1\t\t33\t\t\t\t\t\t\t\t13\tAlexis Dumais\t11\t\t\t\t\t\t22\t\t\t\t\t\t31\t\t\t\t\tJulien Panet-Raymond\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tWEAK BOX\t\t
23\tO\t1\t10\tL\t-23\tRun\tRush\t8\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI BOMBER\t\t\t\t\t\t\t\t\t
24\tO\t2\t2\tL\t-31\tRun\tRush\t12\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t5(4) COUGARS\t\t\t\t\t\t\t\t\t
25\tO\t1\t10\tR\t-43\tPass\tComplete\t5\t1\t\t\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t3(2) RACCOON SCUBBA PEE-WEE STR\t\t\t\t\t\t\t\t\t
26\tO\t2\t5\tM\t-48\tRun\tRush\t3\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
27\tO\t3\t2\tR\t-51\tRun\tRush\t11\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t33(2) YETI X-SLAM\t\t\t\t\t\t\t\t\t
28\tO\t1\t10\tR\t48\tRun\tRush\t17\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
29\tO\t1\t10\tR\t31\tRun\tRush\t2\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
30\tO\t2\t8\tR\t29\tRun\tRush\t8\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
31\tO\t1\t10\tM\t31\tRun\tRush\t5\t1\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
32\tO\t2\t5\tM\t26\tPass\tIncomplete\t0\t1\t\t\t8\tAntoine Lincourt\t\t\t1\tThomas Trudel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKING TRIPS\t9(8) PONY GOSE\t\t\t\t\t\t\t\t\t
33\tO\t3\t5\tL\t31\tPass\tComplete\t6\t1\t\t\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING BAT\t32(3) BLUFF DOLPHINS\t\t\t\t\t\t\t\t\t
34\tO\t1\t10\tR\t25\tPass\tComplete\t17\t1\t\t\t8\tAntoine Lincourt\t\t\t88\tJérémy St-Onge\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDIRK\t33(2) BLUFF SHARK\t\t\t\t\t\t\t\t\t
35\tO\t1\t10\tR\t8\tRun\tRush, TD\t8\t1\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
36\tK\t0\t5\tR\t5\tExtra Pt.\tGood\t0\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t87\t\t\t\t\t\t\t\t\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
37\tK\t0\t0\tL\t-45\tKO\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t55\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
38\tD\t1\t10\tL\t-22\tRun\tPenalty\t10\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
39\tD\t1\t10\tL\t-28\tPass\tComplete\t8\t2\t\t\t\t\t\t1\t\t\t2\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tWHITE #\tPLUS\t\t
40\tD\t2\t2\tL\t-40\tPass\tComplete\t8\t2\t\t\t\t\t\t1\t\t\t11\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tWEAK\t\t
41\tD\t1\t10\tL\t-48\tPass\tBatted Down\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tWEAK BOX\t\t
42\tD\t2\t10\tL\t-48\tPass\tComplete\t52\t2\t\t\t\t\t\t1\t\t\t9\t15\tSebastien Cantin-Bolduc\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tPLUS\t\t
43\tD\t1\t10\tL\t10\tPass\tComplete\t5\t2\t\t\t\t\t\t1\t\t\t33\t9\tDonovan King-Henri\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tSILVER\tBAT\t\t
44\tD\t2\t5\tL\t5\tPass\tIncomplete\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tWEAK BOX\t\t
45\tD\t3\t5\tL\t5\tPass\tComplete, TD\t5\t2\t\t\t\t\t\t1\t\t\t19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN OUTLAW\tWHITE #\tDELAY\t\t
46\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
47\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
48\tK\t0\t0\tR\t-45\tKO Rec\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t34\t\t\t\t\t\t\t\t\t\t\t\t45\t\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t
49\tO\t1\t10\tM\t-27\tRun\tRush\t1\t2\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t38(9) PONY\t\t\t\t\t\t\t\t\t
50\tO\t2\t9\tM\t-28\tPass\tIncomplete\t0\t2\t\t\t8\tAntoine Lincourt\t\t\t1\tThomas Trudel\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t3(2) RACCOON SCUBBA PEE-WEE STR\t\t\t\t\t\t\t\t\t
51\tO\t3\t9\tL\t-28\tPass\tComplete\t20\t2\t\t\t8\tAntoine Lincourt\t\t\t80\tIsaac Lussier-Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tBROOKLYN\t\t\t\t\t\t\t\t\t
52\tO\t1\t10\tL\t-48\tRun\tRush\t3\t2\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQUEEN TRIPS\t2(3) PONY RACCOON MADDEN WK\t\t\t\t\t\t\t\t\t
53\tO\t2\t7\tR\t-51\tRun\tRush\t2\t2\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
54\tO\t3\t5\tR\t-53\tPass\tComplete\t6\t2\t\t\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING BAT\t32(3) BLUFF DOLPHINS\t\t\t\t\t\t\t\t\t
55\tO\t1\t10\tM\t51\tRun\tRush\t2\t2\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
56\tO\t2\t8\tR\t49\tRun\tRush\t6\t2\t8\t\t8\tAntoine Lincourt\tAntoine Lincourt\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\tARGOS DOVE\t\t\t\t\t\t\t\t\t
57\tO\t3\t2\tM\t43\tRun\tRush\t2\t2\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t36(7) DOG LEAD\t\t\t\t\t\t\t\t\t
58\tO\t1\t10\tM\t41\tRun\tRush\t3\t2\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
59\tO\t2\t7\tM\t38\tPass\tComplete, TD\t38\t2\t\t\t8\tAntoine Lincourt\t\t\t6\tDeondre Fraser-Allen\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQUEEN TRIPS\tPOP 2(3) GOOGLE WK\t\t\t\t\t\t\t\t\t
60\tK\t0\t5\tM\t5\tExtra Pt.\tGood\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
61\tK\t0\t0\tM\t-45\tKO\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t64\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
62\tD\t1\t10\tL\t-40\tRun\tRush\t2\t2\t\t24\t\t\t\t\t\t\t\t4\tLudovic Martin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tWEAK BOX\t\t
63\tD\t2\t8\tR\t-42\tRun\tRush\t20\t2\t\t33\t\t\t\t\t\t\t\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOUTLAW\tBRADY\tDELAY\t\t
64\tD\t1\t10\tR\t48\tRun\tRush\t0\t2\t\t\t\t\t\t\t\t\t\t4\tLudovic Martin\t\t7\tAmbroise Duplessis\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
65\tD\t2\t10\tR\t48\tPass\tComplete\t11\t2\t\t\t\t\t\t1\t\t\t88\t28\tChristophe Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tWHITE #\tWEAK EDGE\t\t
66\tD\t1\t10\tR\t37\tRun\tRush\t1\t2\t\t31\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMUG\tSILVER\tRAW\t\t
67\tD\t2\t9\tR\t36\tPass\tBatted Down\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMUG\tSILVER\tRAW\t\t
68\tD\t3\t10\tR\t37\tRun\tRush\t15\t2\t\t1\t\t\t\t\t\t\t\t4\tLudovic Martin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tWHITE #\tROBBER\t\t
69\tD\t1\t10\tM\t22\tRun\tRush\t1\t2\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t10\tPier-Luc Boucher\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tRAIN\tCAT\t\t
70\tD\t2\t9\tM\t21\tPass\tComplete\t14\t2\t\t\t\t\t\t1\t\t\t11\t31\tJulien Panet-Raymond\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
71\tD\t1\t10\tM\t7\tPass\tSack\t0\t2\t\t\t\t\t\t\t\t\t\t13\tAlexis Dumais\t\t\t\t\t\t\t\t\t\t\t\t\t13\t\t\t\t\tAlexis Dumais\t\t\t\t\t\t\tSHOT\t\t\t\t\t\t\tFLEX\tSILVER\tBAT\t\t
72\tO\t1\t10\tL\t-20\tPass\tComplete\t5\t2\t\t\t8\tAntoine Lincourt\t\t\t81\tSimon Potvin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t4(5) COUGARS STORK WK\t\t\t\t\t\t\t\t\t
73\tO\t2\t5\tL\t-25\tRun\tRush\t3\t2\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKING TRIPS\t9(8) PONY GOSE\t\t\t\t\t\t\t\t\t
74\tO\t3\t3\tL\t-28\tRun\tRush\t-2\t2\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tKING TRIPS\t32(3) YETI SLAM\t\t\t\t\t\t\t\t\t
75\tK\t4\t5\tL\t-26\tPunt\tReturn\t0\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t43\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
76\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
77\tD\t1\t10\tL\t-53\tRun\tPenalty\t5\t2\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tTEX\t\t
78\tD\t1\t5\tL\t52\tPass\tBatted Down\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tTEX\t\t
79\tD\t2\t5\tL\t52\tPass\tComplete\t13\t2\t\t\t\t\t\t1\t\t\t19\t28\tChristophe Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN OUTLAW\tWHITE #\tDELAY\t\t
80\tD\t1\t10\tL\t39\tPass\tIncomplete\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOUTLAW\tPALMS\tTEX\t\t
81\tD\t2\t10\tR\t39\tPass\tComplete\t9\t2\t\t\t\t\t\t1\t\t\t11\t22\tHugo Chevalier\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tSTRONG EDGE\t\t
82\tD\t3\t1\tR\t30\tPass\tBatted Down\t0\t2\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOUTLAW\tWHITE #\tTEX\t\t
83\tD\t4\t1\tR\t30\tPass\tComplete\t29\t2\t\t\t\t\t\t1\t\t\t11\t13\tAlexis Dumais\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tOUTLAW\tWHITE #\t\t\t
84\tK\t0\t0\tR\t1\tKO\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t45\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
85\tD\t1\t10\tR\t-28\tRun\tRush\t3\t3\t\t2\t\t\t\t\t\t\t\t17\tAlexandre Milnes-Pominville\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tChaNGE OF PACE\t\t\t\t\t\t\tBACKER FLEX\tBRADY\tCAT\t\t
86\tD\t2\t7\tR\t-31\tRun\tRush\t-4\t3\t\t33\t\t\t\t\t\t\t\t13\tAlexis Dumais\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
87\tD\t3\t11\tR\t-27\tPass\tComplete\t14\t3\t\t\t\t\t\t1\t\t\t5\t22\tHugo Chevalier\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tSTRONG EDGE\t\t
88\tD\t1\t10\tL\t-41\tPass\tComplete\t5\t3\t\t\t\t\t\t1\t\t\t19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tHOLD\tWEAK BOX\t\t
89\tD\t2\t5\tR\t-46\tPass\tComplete\t14\t3\t\t\t\t\t\t1\t\t\t5\t95\tCharles-Hugo Thomassin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tBRADY\tSTRONG EDGE\t\t
90\tD\t1\t10\tR\t50\tRun\tRush\t1\t3\t\t33\t\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tBRADY\tCAT\t\t
91\tD\t2\t9\tR\t49\tRun\tPenalty\t-5\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tWEAK BOX\t\t
92\tD\t2\t14\tM\t54\tRun\tRush\t1\t3\t\t\t\t\t\t\t\t\t\t95\tCharles-Hugo Thomassin\t\t7\tAmbroise Duplessis\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
94\tD\t3\t13\tR\t53\tPass\tInterception\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t4\tLudovic Martin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tRAIN\t\t\t
95\tO\t1\t10\tR\t38\tPass\tComplete, TD\t38\t3\t\t\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDIRK\tFOWL WK\t\t\t\t\t\t\t\t\t
96\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
97\tK\t0\t5\tR\t5\tExtra Pt.\tGood\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
98\tK\t0\t0\tR\t-45\tKO\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t64\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
99\tD\t1\t10\tL\t-27\tRun\tRush\t10\t3\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
100\tD\t1\t10\tL\t-37\tRun\tRush\t1\t3\t\t1\t\t\t\t\t\t\t\t95\tCharles-Hugo Thomassin\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
101\tD\t2\t9\tL\t-38\tPass\tComplete\t18\t3\t\t\t\t\t\t1\t\t\t5\t31\tJulien Panet-Raymond\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tBRADY\tCAT\t\t
102\tD\t1\t10\tL\t54\tPass\tIncomplete\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tSTRONG EDGE\t\t
103\tD\t2\t10\tL\t54\tRun\tRush\t-4\t3\t\t33\t\t\t\t\t\t\t\t55\tXavier Roy\t\t95\tCharles-Hugo Thomassin\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tSTRONG EDGE\t\t
104\tD\t3\t14\tL\t-52\tRun\tRush\t3\t3\t\t1\t\t\t\t\t\t\t\t10\tPier-Luc Boucher\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN OUTLAW\tPALMS\t\t\t
105\tK\t4\t11\tL\t55\tPunt Rec\tPenalty\t15\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
106\tD\t1\t10\tL\t40\tRun\tPenalty\t-10\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
107\tD\t1\t20\tL\t50\tPass\tComplete\t13\t3\t\t\t\t\t\t1\t\t\t9\t10\tPier-Luc Boucher\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tSTRONG EDGE\t\t
108\tD\t2\t7\tL\t37\tPass\tIncomplete\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tBRADY\tCAT\t\t
109\tD\t3\t7\tL\t37\tPass\tComplete\t13\t3\t\t\t\t\t\t1\t\t\t11\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN BANDIT\tPALMS\t\t\t
110\tD\t1\t10\tL\t24\tRun\tRush\t8\t3\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
111\tD\t2\t2\tL\t16\tPass\tIncomplete\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tBRADY\tSTRONG EDGE\t\t
112\tD\t3\t2\tL\t16\tRun\tPenalty\t10\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tPLUS\t\t
113\tD\t1\t10\tL\t8\tPass\tBatted Down\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tSTRONG EDGE\t\t
114\tD\t2\t10\tL\t8\tPass\tBatted Down\t0\t3\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tPALMS\tPLUS\t\t
115\tD\t3\t10\tL\t8\tPass\tComplete, TD\t8\t3\t\t\t\t\t\t1\t\t\t19\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER OUTLAW\tGREEN\t\t\t
116\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
117\tK\t0\t0\tR\t50\tKO Rec\tReturn\t0\t3\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t87\t\t\t\t\t\t\t\t\t\t\t\t15\t\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t
118\tO\t1\t10\tL\t-30\tRun\tRush\t-4\t3\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING BAT\t34(5) TIGER\t\t\t\t\t\t\t\t\t
119\tO\t2\t14\tL\t-26\tPass\tComplete\t5\t3\t\t\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
120\tO\t3\t9\tL\t-31\tPass\tComplete\t15\t3\t\t\t8\tAntoine Lincourt\t\t\t82\tRalph Chapdelaine\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tQUEEN TRIPS\tDADDY\t\t\t\t\t\t\t\t\t
121\tO\t1\t10\tL\t-46\tRun\tRush\t5\t3\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t5(4) COUGARS\t\t\t\t\t\t\t\t\t
122\tO\t2\t5\tL\t-51\tRun\tRush\t2\t3\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
123\tO\t1\t10\tM\t27\tRun\tRush\t3\t3\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t36(7) DOG LEAD\t\t\t\t\t\t\t\t\t
124\tO\t2\t7\tL\t24\tPass\tInterception\t0\t3\t\t\t8\tAntoine Lincourt\t\t\t80\tIsaac Lussier-Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t39(8) YETI GLANCE\t\t\t\t\t\t\t\t\t
125\tD\t1\t10\tR\t-8\tRun\tRush\t7\t4\t\t33\t\t\t\t\t\t\t\t\t\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tEAGLE\t\t
126\tD\t2\t3\tR\t-15\tPass\tBatted Down\t0\t4\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\tWEAK BOX\t\t
127\tD\t3\t3\tR\t-15\tPass\tComplete\t11\t4\t\t\t\t\t\t1\t\t\t5\t17\tAlexandre Milnes-Pominville\t\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER OUTLAW\tGREEN\t\t\t
128\tD\t1\t10\tR\t-26\tRun\tRush\t1\t4\t\t33\t\t\t\t\t\t\t\t55\tXavier Roy\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tWHITE #\tWEAK BOX\t\t
129\tD\t2\t9\tR\t-27\tRun\tRush\t0\t4\t\t2\t\t\t\t\t\t\t\t55\tXavier Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tPLUS\t\t
130\tD\t3\t9\tL\t-27\tPass\tComplete\t7\t4\t\t\t\t\t\t1\t\t\t11\t\t\t\t12\tMathew Landry\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN OUTLAW\tWHITE #\t\t\t
131\tD\t4\t2\tL\t-34\tPass\tIncomplete\t0\t4\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tCAT\t\t
132\tO\t1\t10\tR\t34\tRun\tRush\t6\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t38(9) YETI\t\t\t\t\t\t\t\t\t
133\tO\t2\t4\tR\t28\tRun\tPenalty\t-10\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING BAT\t34(5) TIGER\t\t\t\t\t\t\t\t\t
134\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
135\tO\t2\t14\tL\t38\tPass\tComplete\t9\t4\t\t\t8\tAntoine Lincourt\t\t\t82\tRalph Chapdelaine\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDIRK\t33(2) BLUFF SHARK\t\t\t\t\t\t\t\t\t
136\tO\t3\t5\tL\t29\tPass\tComplete\t21\t4\t\t\t8\tAntoine Lincourt\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSHAQ\tSTORK STR\t\t\t\t\t\t\t\t\t
137\tO\t1\t10\tL\t8\tRun\tRush\t2\t4\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t32(3) YETI X-BOMBER\t\t\t\t\t\t\t\t\t
138\tO\t2\t8\tL\t6\tPass\tComplete, TD\t6\t4\t\t\t8\tAntoine Lincourt\t\t\t34\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMALONE\tVADER SWING\t\t\t\t\t\t\t\t\t
139\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
140\tK\t0\t5\tL\t5\tExtra Pt.\tGood\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
141\tK\t0\t0\tR\t-45\tKO\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t60\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
142\tD\t1\t10\tR\t-47\tRun\tRush\t0\t4\t\t33\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t28\tChristophe Roy\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tWEAK BOX\t\t
143\tD\t2\t10\tR\t-47\tPass\tBatted Down\t0\t4\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER OUTLAW\tHOLD\t\t\t
144\tD\t3\t10\tR\t-47\tRun\tRush\t-1\t4\t\t1\t\t\t\t\t\t\t\t9\tDonovan King-Henri\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN BANDIT\tPALMS\t\t\t
145\tK\t4\t11\tL\t-46\tPunt Rec\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t2\t\t\t\t\t\t\t\t\t\t\t\t39\t\tPlamedi Mbuyi\t\t\t\t\t\t\t\t\t\t\t\t\t
146\tO\t1\t10\tR\t-25\tRun\tRush\t5\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
147\tO\t2\t5\tR\t-30\tRun\tRush\t1\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t33(2) YETI X-SLAM\t\t\t\t\t\t\t\t\t
148\tO\t3\t4\tR\t-31\tRun\tRush\t3\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING DEUCE\t37(6) DOG LEAD\t\t\t\t\t\t\t\t\t
149\tO\t4\t1\tR\t-34\tRun\tRush\t0\t4\t34\t\t8\tAntoine Lincourt\tSasha Jouthe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tRHINO\t37(6) BOOM\t\t\t\t\t\t\t\t\t
150\tS\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
151\tD\t1\t10\tL\t34\tPass\tIncomplete\t0\t4\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tHOLD\tRAVEN\t\t
152\tD\t2\t10\tL\t34\tPass\tTimeout\t9\t4\t\t\t\t\t\t1\t\t\t9\t44\tElie Boisvert\t\t10\tPier-Luc Boucher\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
153\tD\t2\t10\tL\t25\tPass\tComplete\t10\t4\t\t9\t\t\t\t\t\t\t\t10\tPier-Luc Boucher\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN OUTLAW\tWHITE #\t\t\t
154\tD\t1\t10\tL\t18\tRun\tRush\t7\t4\t\t\t\t\t\t1\t\t\t11\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMUG\tSILVER\tRAW\t\t
155\tD\t2\t7\tL\t18\tPass\tComplete, TD\t18\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER OUTLAW\tGREEN\t\t\t
156\tK\t0\t5\tL\t5\tExtra Pt. Block\tGood\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
157\tK\t0\t0\tR\t-45\tKO Rec\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t21\t\t\t\t\t\t\t\t\t\t\t\t64\t\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t
158\tO\t1\t10\tR\t-14\tRun\tRush\t5\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tWING BAT\t38(9) YETI\t\t\t\t\t\t\t\t\t
159\tO\t2\t5\tM\t-19\tRun\tRush\t0\t4\t21\t\t8\tAntoine Lincourt\tZachary Bouchard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING TRIPS\t38(9) YETI DOVE\t\t\t\t\t\t\t\t\t
160\tO\t3\t5\tM\t-19\tPass\tIncomplete\t0\t4\t\t\t8\tAntoine Lincourt\t\t\t11\tAlexandre Lacombe\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSING DEUCE\t16(7) DOG LEAD\t\t\t\t\t\t\t\t\t
161\tK\t4\t5\tR\t-19\tPunt\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t87\tRaphael St-Hilaire\t\t\t\t\t\t\t\t\t\t\t27\t\t\t\t\t\t\t\t\tJayden Rice\t38\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
162\tD\t1\t10\tR\t-42\tPass\tComplete\t56\t4\t\t\t\t\t\t1\t\t\t11\t22\tGage Blasco\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN FLEX\tWHITE #\tWEAK BOX\t\t
163\tD\t1\t10\tR\t12\tRun\tRush\t-4\t4\t\t33\t\t\t\t\t\t\t\t99\tAlexandre Athens-Leger\t\t90\tLouis-Philip Bernard\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tFLEX\tSILVER\tBAT\t\t
164\tD\t2\t14\tR\t16\tPass\tIncomplete\t0\t4\t\t\t\t\t\t1\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tMUG\tSILVER\tRAW\t\t
165\tD\t3\t14\tL\t16\tPass\tComplete\t10\t4\t\t\t\t\t\t1\t\t\t11\t12\tMathew Landry\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tSUN BANDIT\tBLACK\t\t\t
166\tD\t4\t4\tL\t6\tRun\tRush, TD\t6\t4\t\t33\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER OUTLAW\tGREEN\t\t\t
167\tD\t0\t5\tL\t5\t2 Pt. Defend\tNo Good\t0\t4\t\t5\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tBACKER FLEX\tGREEN\t\t\t
168\tK\t0\t0\tL\t-45\tKO Rec\tReturn\t0\t4\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t23\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
169\tO\t1\t10\tL\t-42\tRun\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
170\tO\t2\t10\tL\t-42\tRun\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
171\tO\t3\t10\tL\t-42\tRun\t\t0\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t
`;
const FICHIER = 'jsonGamePlay.json';
const FICHIER_2 = 'chargerDonneesLineup.js.txt';
async function csvToJson() {
    // Séparation du fichier en lignes et en colonnes
    const lignes = gamePlay.split('\n');
    const keys = lignes[0].split('\t').map(key => toCamelCase(key));
    const jsonGamePlay = lignes.slice(1).map(ligne => {
        const values = ligne.split('\t');
        const entry = keys.reduce((obj, key, index) => {
            if (values[index]) {
                obj[key] = values[index];
            }
            return obj;
        }, {});
        return entry;
    });
    await (0, saveFile_1.saveFile)(FICHIER, JSON.stringify(jsonGamePlay));
    const allPlayers = Array.from({ length: 99 }, (v, i) => (i + 1).toString());
    function getArrayUnique(players) {
        return Array.from(new Set(players))
            .sort((a, b) => { return +a - +b; });
    }
    function getPlayerType(playerTypeList) {
        let players = [];
        playerTypeList.forEach((playerType) => {
            players.push(...jsonGamePlay.filter(gp => gp[playerType]).map(gp => gp[playerType]));
        });
        // console.log('players', players)
        const playersUnique = getArrayUnique(players);
        // console.log('playersUnique', playersUnique)
        return playersUnique.length > 0 ? playersUnique : allPlayers;
    }
    // console.log(jsonGamePlay);
    // console.log(arrayDeJson);
    // home
    const passer = getPlayerType(['passerJersey']);
    const rusher = getPlayerType(['rusherJersey']);
    const receiver = getPlayerType(['receiverJersey']);
    const kicker = getPlayerType(['kickerJersey']);
    const tackler = getPlayerType(['tackler1Jersey', 'tackler2Jersey']);
    const interceptedBy = getPlayerType(['interceptedByJersey']);
    const recoveredBy = getPlayerType(['recoveredByJersey']);
    const returner = getPlayerType(['returnerJersey']);
    // away
    const oppPasser = getPlayerType(['oppPasserJersey']);
    const oppRusher = getPlayerType(['oppRusherJersey']);
    const oppReceiver = getPlayerType(['oppReceiverJersey']);
    // const tackler1 = Array.from(new Set(jsonGamePlay.filter(gp => gp.tackler1Jersey).map(gp => gp.tackler1Jersey)))
    // const tackler2 = Array.from(new Set(jsonGamePlay.filter(gp => gp.tackler2Jersey).map(gp => gp.tackler2Jersey)))
    // const interceptedBy = Array.from(new Set(jsonGamePlay.filter(gp => gp.interceptedByJersey).map(gp => gp.interceptedByJersey)))
    // console.log({
    //    passer,
    //    rusher,
    //    receiver,
    //    kicker,
    //    tackler,
    //   interceptedBy,
    //   recoveredBy,
    //    returner,
    //    oppPasser,
    //    oppRusher,
    //    oppReceiver,
    // })
    // QB = Quaterback
    // RB   Running back
    // WR   wide receiver
    // OL   offensive lineman
    // D    defensive lineman
    // LB   linebacker
    // DB   defensive back
    // K =  Kicker (modifié)
    const lineUp = {
        home: {
            nom: homeTeam,
            abrev: abrevHomeTeam,
            positions: {
                qb: [...passer],
                rb: [...rusher],
                wr: getArrayUnique([...receiver, ...returner, ...rusher, ...interceptedBy, ...recoveredBy]),
                ol: [...tackler],
                dl: [...tackler],
                lb: [...tackler],
                db: [...tackler],
                k: [...kicker],
            }
        },
        away: {
            nom: awayTeam,
            abrev: abrevAwayTeam,
            positions: {
                qb: [...oppPasser],
                rb: [...oppRusher],
                wr: allPlayers, // [...oppReceiver],
                ol: allPlayers,
                dl: allPlayers,
                lb: allPlayers,
                db: allPlayers,
                k: allPlayers,
            }
        }
    };
    console.log(lineUp.home.positions);
    await (0, saveFile_1.saveFile)(FICHIER_2, `window.chargerDonneesLineup(${JSON.stringify(lineUp)})`);
}
csvToJson()
    .then(() => {
    console.log(`✅ ${FICHIER} généré avec succès.`);
})
    .catch(e => {
    console.error(`\ngenerateScenario.ts : Erreur de création.\n\n`, e);
    throw new Error('Génération en erreur');
});
function toCamelCase(str) {
    return str
        // Diviser la chaîne en mots sur les espaces ou les underscores
        .split(/[\s_\/]+/)
        // Passer chaque mot sauf le premier en majuscule
        .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // Joindre tous les mots pour former une chaîne camelCase
        .join('')
        .replace('#', '');
}
