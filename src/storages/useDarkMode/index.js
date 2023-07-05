import { atom } from 'jotai';

import KEYS from '@/constant/keys';
import THEME from '@/constant/theme';
import localStorage from '@/utils/localStorage';

const isDarkMode = atom(localStorage(KEYS.THEME)?.get() === THEME.DARK);

export default isDarkMode;
