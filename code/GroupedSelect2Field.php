<?php

namespace Sheadawson\Select2;

use SilverStripe\Forms\GroupedDropdownField;
use SilverStripe\View\Requirements;

class GroupedSelect2Field extends GroupedDropdownField
{
    public function Field($properties = array())
    {
        Requirements::javascript('sheadawson/silverstripe-select2: client/dist/js/main.js');
        Requirements::css('sheadawson/silverstripe-select2: client/dist/css/main.css');

        $this->addExtraClass('select2')->addExtraClass('no-chzn');

        return parent::Field($properties);
    }
}
