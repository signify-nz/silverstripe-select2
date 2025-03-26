<?php

namespace Sheadawson\Select2;

use SilverStripe\Forms\ListboxField;
use SilverStripe\View\Requirements;

/**
 * MultiSelect2Field Definition
 *
 * @package    Silverstripe-Select2
 * @author     Shea Dawson <shea@silverstripe.com.au>
 */
class MultiSelect2Field extends ListBoxField
{
    public function Field($properties = array())
    {
        Requirements::javascript('sheadawson/silverstripe-select2: client/dist/js/main.js');
        Requirements::css('sheadawson/silverstripe-select2: client/dist/css/main.css');

        $this->addExtraClass('select2')->addExtraClass('no-chzn');

        return parent::Field($properties);
    }
}
