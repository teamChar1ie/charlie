'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbBuildingFactory, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBleedingWound, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiPlanks,
  GiWindmill
} from 'react-icons/gi';
import { FaFileContract, FaPenFancy, FaSkiing } from 'react-icons/fa';
import { BsLightbulb, BsRulers, BsSnow, BsTranslate } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdComputer, MdConstruction, MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { AiOutlineApi } from 'react-icons/ai';
import { FcStatistics } from 'react-icons/fc';


export const categories = [
  {
    label: 'API',
    icon: AiOutlineApi,
    description: 'API Experts.',
  },
  {
    label: 'Computer Forensics',
    icon: MdComputer,
    description: 'API Experts.',
  }
  ,
  {
    label: 'Construction',
    icon: MdConstruction,
    description: 'Construction experts.',
  },
  {
    label: 'Hardwood Flooring',
    icon: GiPlanks,
    description: 'Hardwood Flooring experts.',
  },
  {
    label: 'Patent Infringement',
    icon: BsLightbulb,
    description: 'Patent Infringement experts.'
  },
  {
    label: 'Personal Injury',
    icon: GiBleedingWound,
    description: 'Personal injury experts.'
  },
  {
    label: 'Plain Legal Writing/Design',
    icon: FaFileContract,
    description: 'Plain legal writing experts.'
  },
  {
    label: 'Pollution',
    icon: TbBuildingFactory,
    description: 'Pollution experts.'
  },
  {
    label: 'Statistics',
    icon: FcStatistics,
    description: 'Statistics experts.'
  },
  {
    label: 'Translation',
    icon: BsTranslate,
    description: 'Translation experts.'
  },
  {
    label: 'Writing/Design',
    icon: FaPenFancy,
    description: 'Writing and design experts.'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          text-center
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;