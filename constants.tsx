
import React from 'react';
import { Badge, Task } from './types';

export const CHRONOS_MASCOT = "https://lh3.googleusercontent.com/aida-public/AB6AXuCWoahKFyI6pwGmlRX_lg2pLIDXcI72zGn318TAJZfWQknrbl2noIAB3Kl-KH3XiqFXBs76QI3S_14OrNKhR5orvZPUnFHyIUX1H7UWANrZYLE-UFWUOt8IiJ0Huqjxl8A5hD24HEbPKqkR6Cn6gpqm19v8-QXHTBWPMH3DLIC7xJxF244WpG-511EGj1agDkrphNUdrhOgD_n6GXBfRBKnOHd-FKSeT_l51BIfdGSMxBdt7n9X_hJ3LJXJZUbG3DgtGcTnX0xYwCQ";
export const CHRONOS_CELEBRATION = "https://lh3.googleusercontent.com/aida-public/AB6AXuDhMco4CUJMwubG89Ri3iiVqDepBNYuilstsOuifJOQ1Kgk__2GQsf-CeIqxuP3tm1AZrgoaeVPUE26V8T1QP99cTHv1UhUfubKlKJTxZh0sxTcLB8HcnX31q5HE1Ez0x3TyOlkICVVkBztRi1Rzaz5I4AnQ8FI0oR2CBCy-iZsFDKs_fqRYu0F2rpcgkvwYiYb_mGwPlyTnRU7vYuX69K1ZXIy2hZN7C8o1CpS_oBMmiDaeLs8CxBgrixbaXDoui6G_DzjrvKs3WY";

export const INITIAL_TASKS: Task[] = [
  { id: '1', title: 'Weekly Team Sync', time: '09:00 AM', description: 'Discuss Q4 goals', status: 'completed', tags: ['Meeting'] },
  { id: '2', title: 'Client Call: Stark Ind.', time: '10:30 AM', status: 'completed', tags: ['Call'] },
  { id: '3', title: 'Write Proposal', time: '01:30 PM', description: 'Project: Chronos Rebranding', status: 'ongoing', tags: ['Design', 'Urgent'] },
  { id: '4', title: 'Review Analytics', time: '03:00 PM', description: 'Monthly performance check', status: 'pending', tags: ['Data'] },
  { id: '5', title: 'Gym Session', time: '05:00 PM', description: 'City Fitness', status: 'pending', tags: ['Personal'] },
];

export const BADGES: Badge[] = [
  { id: '1', name: 'Focus King', description: '10+ focus sessions', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRwt0mXQ44NiTLXppFpK65m5Vd2B0VrtepbT4C74bn-L-larSSjjdqINfAOAmuDowMevUz0o1sdH-FTJhZ3zAtreIg2Gn8cBpc7iip8OLgsuZRFV-bKOLKqctU2f_fjoQPa_mq2eMJFpLYxWBlliImhS2wA8QQBQcFG6HbjP67IzW95w2qvcsJGqfCLDsheAkXn6fj4KegqeLw5jkfd4RGn9reZngs9AW0Q2tbdfrPwTM0kZibd3MSqVUszX-nm0n8EcXHVIWmDlA', unlocked: true },
  { id: '2', name: 'Task Master', description: 'Finish all daily tasks', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLDpGfm7EYNtFVuAs0BmTnxRgec5S6Kc8NWNcJ6jfKt7Ty7vBYAzemzuedSbs44WfG-5J8B7Zghpm-UELg1GnYjflCur7Ie1jw34fZdgxVe5AJunE1_yOndfJLSY3iMGVR7IpCERhUCQuJG9GeU3UhOJNmqvN7TA6gIK91r9XxlssUMZFuSwdUn89orYjQx9BwN2hQJ6t2V57sO61oLA2j78J282rUHaUGOY2DqUvhXl4PA2DApLvNQylWxodbLE5c7NMtwJt0egI', unlocked: true },
  { id: '3', name: 'Idea Generator', description: 'Created 5+ custom routines', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXBHztz3i2K0eb-gO59tgjd9oxUO6k5lBTGflgfjOJCmSqshXxprhq7JhMzAINkeuNYxImVsJjaf7_ABLbJ91kI170zyn7QhPjuw3pvoitX4P79H292-oNMMIk-Q38yqQpau6G6gA0iQINw1lCx3T1ngvpciE7ulIRtlxZr-vAYRx9itWClWuFEDEDfouEikNRHbkFw8tj14lkj1m0KxTT1EYtzsqC4Ov5-huyQ5Edn2EkY7zn_vBFewj3thfsYTW3tpPYqdyIcBg', unlocked: true },
  { id: '4', name: 'Early Bird', description: 'Finished a task before 8 AM', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAAiLQQzxSY1V3Y32JONYgsBVUywKuzrW9MRIBye3j3DUUFIDwQmhHWsvTygzwyVKN9HHjrl-KvyKZX-V1pGJesKDSQ5FNpixK8fHWBxRrsBJB6vnXFxUqKg_gnRrH4QFPnr4IXVmZtnBn5PBGkMEOgfezwCm37S--hwIoxunpdScyMqXWJnqyu7XjMZlmrY-7odZhCSvjxsPJ9S50zkNcabFgnSq3DF93UsQYIKRPYd6vIj9VPdYVioTTuSNPpXiesDnoKEDcqAI', unlocked: false },
];
