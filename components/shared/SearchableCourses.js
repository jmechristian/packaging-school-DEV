import { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import {
  ArrowTopRightOnSquareIcon,
  ArrowLongRightIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  BoltIcon,
  BriefcaseIcon,
  Cog6ToothIcon,
  SwatchIcon,
  TruckIcon,
  InformationCircleIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  ArrowsUpDownIcon,
  PlayCircleIcon,
  ChevronDoubleDownIcon,
  StarIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

import NewCouseCard from './NewCouseCard';

const SearchableCourses = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isSearchTerm, setIsSearchTerm] = useState('');
  const [isSearchCourses, setIsSearchCourses] = useState('');

  return <div>SearchableCourses</div>;
};

export default SearchableCourses;
