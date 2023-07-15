import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './menu.module.css';

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface MenuProps {
  options: MenuItem[];
  trigger: React.ReactElement;
}

const Menu: React.FC<MenuProps> = ({ options, trigger }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent event from bubbling up to the global click listener
    setMenuVisible(!menuVisible);
  };

  const handleOptionClick = (option: MenuItem) => {
    option.onClick();
    setMenuVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuVisible &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMenuVisible(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [menuVisible]);

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  }, [menuVisible]);

  const menu = (
    <div ref={menuRef} className={styles['bp-menu']} style={menuPosition}>
      {options.map((option) => (
        <div
          key={option.label}
          className={styles['bp-option']}
          onClick={() => handleOptionClick(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );

  return (
    <div>
      <div ref={triggerRef} onClick={handleToggleMenu}>
        {trigger}
      </div>

      {menuVisible && ReactDOM.createPortal(menu, document.body)}
    </div>
  );
};

export default Menu;
